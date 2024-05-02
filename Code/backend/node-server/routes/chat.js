// routes/profile.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const verifyToken = require('../utils/verifyToken');
const fs = require('fs');
const natural = require('natural');
const multer = require('multer');
const { S3Client, PutObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const { v4: uuidv4 } = require('uuid'); // For generating random UUIDs

const upload = multer({storage : multer.memoryStorage() })

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


router.post('/upload', upload.single('file'), async (req, res) => {


console.log(req.file )


  if (!req.file) {
    return res.status(400).json({ error: 'No image uploaded' });
  }

  const file = req.file;
  const extension = file.originalname.split('.').pop(); // Extract file extension
  var S3_BUCKET_NAME =  process.env.AWS_BUCKET_NAME;
  // Generate random UUID and construct filename
  const filename = `${uuidv4()}.${extension}`;
  const key = `${S3_SUBFOLDER_PATH}/${filename}`;

  try {
    const putObjectCommand = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: key, // Use the generated filename as the key in S3
      Body: file.buffer, // Use the file buffer for efficient upload
      ContentType: file.mimetype, // Set the ContentType based on mimetype
    });

    await s3Client.send(putObjectCommand);
    const uploadUrl = `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${key}`;


    const getObjectCommand = new GetObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: key,
    });


    const signedUrl = await getSignedUrl(s3Client, getObjectCommand, { expiresIn: process.env.AWS_URL_EXPIRATION });







    return res.status(200).json({ message: 'Image uploaded successfully', url: signedUrl });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Upload failed' });
  }

  return res.status(200).json({ status: req.body
   });



});





module.exports = router;

