// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,

  },
  lastName: {
    type: String,

  },
  birthDate: {
    type: Date,

  }





  // You can add more fields here like name, etc.
});




const User = mongoose.model('User', userSchema);

module.exports = User;
