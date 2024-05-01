// routes/profile.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const verifyToken = require('../utils/verifyToken');
const fs = require('fs');
const natural = require('natural');

const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');

const { v4: uuidv4 } = require('uuid'); // For generating random UUIDs



const multer = require('multer');

const storage = multer.memoryStorage(); // Store uploaded file in memory

const upload = multer({
  storage,
  limits: { fileSize: 1000000 }, // Set a size limit (1MB in this example)
});


const s3Client = new S3Client({
  region:  process.env.S3_REGION, // Update with your desired region
  credentials: {
    accessKeyId: process.env.S3_ACCESS,
    secretAccessKey:  process.env.S3_SECRET,
  },
});

const S3_SUBFOLDER_PATH = 'dev/investmate'; 






function readDataFromFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}



router.post('/send',  async (req, res) => {
if(!req.body.message){
  return res.status(400).json({ message: 'Message is required' });
}
try {
  const data = await readDataFromFile(require('../assets/prompts.json'));
  promptsAndReplies = data;

  // Create Tf-Idf classifier after data is loaded
  const classifier = new natural.TfIdfClassifier();
  classifier.addDocuments(promptsAndReplies.map((entry) => entry.prompt), promptsAndReplies.map((entry) => entry.reply));
  classifier.train();

  res.json({ message: 'Data loaded successfully' });
} catch (error) {
  console.error('Error reading JSON file:', error);
  res.status(500).json({ message: 'Error loading data' });
}



   res.status(200).json({
    message: bestReply,
   });

  });





function getBestMatchReply(userMessage) {
  if (!promptsAndReplies) {
    return 'Error loading prompts and replies.'; // Handle missing data
  }

  const prompts = promptsAndReplies.map((entry) => entry.prompt);
  const replies = promptsAndReplies.map((entry) => entry.reply);

  classifier.addDocuments(prompts, replies); // Add documents to classifier
  classifier.train(); // Train the classifier

  const results = classifier.classify(userMessage);
  const bestMatch = results[0];

  return bestMatch.value > 0.7 ? bestMatch.label : 'no_response'; // Adjust threshold if needed
}


router.post('/upload', upload.single('image'), async (req, res) => {


  if (!req.files.file) {
    return res.status(400).json({ error: 'No image uploaded' });
  }

  const file = req.files.file;
  const extension = file.name.split('.').pop(); // Extract file extension
  var S3_BUCKET_NAME =  process.env.AWS_BUCKET_NAME;
  // Generate random UUID and construct filename
  const filename = `${uuidv4()}.${extension}`;
  const key = `${S3_SUBFOLDER_PATH}/${filename}`;

  try {
    const putObjectCommand = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: key, // Use the generated filename as the key in S3
      Body: file.data, // Use the file buffer for efficient upload
      ContentType: file.mimetype, // Set the ContentType based on mimetype
    });

    await s3Client.send(putObjectCommand);
    const uploadUrl = `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${key}`;

    return res.status(200).json({ message: 'Image uploaded successfully', url: uploadUrl });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Upload failed' });
  }
});





module.exports = router;

