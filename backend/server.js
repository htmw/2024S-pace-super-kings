const mongoose = require('mongoose');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const stockSchema = new mongoose.Schema({
  symbol: String,
  price: Number,
  timestamp: Date,
});

const Stock = mongoose.model('Stock', stockSchema);

async function fetchStockData() {
  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
    );
    const stockData = response.data['Global Quote'];

    const newStock = new Stock({
      symbol: stockData['01. symbol'],
      price: parseFloat(stockData['05. price']),
      timestamp: new Date(),
    });

    await newStock.save();

    console.log('Stock data saved to MongoDB');
  } catch (error) {
    console.error('Error fetching stock data:', error);
  }
}

setInterval(fetchStockData, 60 * 1000);
