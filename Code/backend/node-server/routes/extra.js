// routes/auth.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Sign Up
router.post('/test', async (req, res) => {



  
  console.log(req.body);




res.json({
  message: 'ok',
  
})
});


router.get('/test', async (req, res) => {



  
  console.log(req.body);



  
res.json({
  message: 'ok',
  
})
});


module.exports = router;
