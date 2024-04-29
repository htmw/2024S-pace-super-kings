// routes/profile.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const verifyToken = require('../utils/verifyToken');
const fs = require('fs');
const natural = require('natural');




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




module.exports = router;

