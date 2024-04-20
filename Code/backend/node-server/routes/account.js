

// routes/profile.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const verifyToken = require('../utils/verifyToken');
const { FMP_API } = require('../constants');
const { default: axios } = require('axios');




router.get('/money', async (req, res) => {


  return res.status(200).json({ "amount": req.user.amount });
  });

  router.post('/addMoney', async (req, res) => {
console.log("req.body",req.body)

try{

if(req.body.amount && req.body.currency=="USD"){
  req.user.amount = req.user.amount + req.body.amount;
  await req.user.save();

}
}catch(error){
  console.log("error",error)
  return res.status(500).json({ message: 'Something went wrong' });
}



    return res.status(200).json({ "amount": req.user.amount });
    
    });
  


  // router.get('/data', async (req, res) => {

  //   try {
  //     const { ticker } = req.query;
  //     if (!ticker) {
  //       return res.status(400).json({ error: 'Ticker symbol is required' });
  //     }
  
  //     const response = await axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${ticker}?timeseries=180&apikey=${FMP_API}`);
  //     const data = response.data;
  //     res.json(data);
  //   } catch (error) {
  //     console.error('Error fetching stock charts:', error.message);
  //     res.status(500).json({ error: 'Internal server error' });
  //   }
  // });

  module.exports = router;