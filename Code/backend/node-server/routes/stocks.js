

// routes/profile.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const verifyToken = require('../utils/verifyToken');
const { FMP_API } = require('../constants');
const { default: axios } = require('axios');

const fs = require('fs');
const csv = require('csv-parser');





function autocompleteStock( query) {
  return new Promise((resolve, reject) => {
    fs.readFile("./assets/allstocks.json", 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      
      try {
        const jsonData = JSON.parse(data);
        const results = [];

        // Iterate over each entry in the JSON data
        jsonData.forEach(entry => {
          const name = entry.name.toLowerCase(); // Convert to lowercase for case-insensitive matching
          const queryLowerCase = query.toLowerCase();
          if (name.includes(queryLowerCase)) {
            // If a partial match is found, add the ticker symbol to the results
            results.push({
              name : entry.name,
              symbol : entry.ticker
            });
          }
        });

        resolve(results);
      } catch (parseError) {
        reject(parseError);
      }
    });
  });
}

router.get('/search2', async (req, res) => {
  console.log(req.query)
  try {
    const { keyword } = req.query;
    if (!keyword) {
      return res.status(400).json({ error: 'Keyword is required' });
    }

    const response = await autocompleteStock(keyword)
    res.json({
      items : response
    });
  } catch (error) {
    console.error('Error searching stocks:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



router.get('/search', async (req, res) => {
    try {
      const { keyword } = req.query;
      if (!keyword) {
        return res.status(400).json({ error: 'Keyword is required' });
      }
  
      const response = await axios.get('https://finance.yahoo.com/_finance_doubledown/api/resource/searchassist;searchTerm=${keyword}');
      console.log("response", response)
      const data = response.data;
      res.json(data);
    } catch (error) {
      console.error('Error searching stocks:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  });



  router.get('/data', async (req, res) => {

    try {
      const { ticker } = req.query;
      if (!ticker) {
        return res.status(400).json({ error: 'Ticker symbol is required' });
      }
  
      const response = await axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${ticker}?timeseries=180&apikey=${FMP_API}`);
      
      const data = response.data;
      res.json(data);
    } catch (error) {
   
      console.log("error")
      console.error('Error fetching stock charts:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });




  module.exports = router;