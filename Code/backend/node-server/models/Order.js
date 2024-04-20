const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  ticker: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  orderTime: {
    type: Date,
    required: true
  },
  orderType: {
    type: String,
    enum: ['BUY', 'SELL'], // Only allow 'BUY' or 'SELL'
    required: true
  },
  orderStatus: {
    type: String,
    enum: ['PENDING', 'COMPLETED'], // Order can be pending or completed
    default: 'COMPLETED' // Default status is pending
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming your user model is named 'User'
    required: true
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
