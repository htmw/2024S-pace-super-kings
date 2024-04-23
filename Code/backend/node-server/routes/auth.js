// routes/auth.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const User = require('../models/User');

// Sign Up
router.post('/signup', async (req, res) => {
  try {
    const { email, password, firstName,  lastName  ,
      birthDate } = req.body;

    const existingUser = await User.findOne({ email });


    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, firstName, lastName, birthDate, amount: 500});
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: 'Try again' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email});

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

   
    const token = jwt.sign({ email: user.email, id:user._id , amount:user.amount}, process.env.TOKEN_SECRET_KEY, { expiresIn:  process.env.JWT_ACCESS_EXPIRES_IN});
    
    res.status(200).json({ token, data : { email: user.email, firstName : user.firstName, lastName : user.lastName, birthDate : user.birthDate, amount: user.amount, id : user._id }


  
  });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// Forget Password
// router.post('/forgotpassword', async (req, res) => {
//   try {
//     const { email } = req.body;
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Logic to send email for password reset goes here

//     res.status(200).json({ message: 'Password reset instructions sent to your email' });
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong' });
//   }
// });






module.exports = router;
