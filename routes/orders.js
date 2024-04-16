

// routes/profile.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const verifyToken = require('../utils/verifyToken');
const { FMP_API } = require('../constants');
const { default: axios } = require('axios');
const Order = require('../models/Order');




router.get('/', async (req, res) => {
  try {
    // Fetch user based on email
    const userOrders = await Order.find({ 'user': req.user });

    // Return user-specific orders as JSON response
    return res.status(200).json(userOrders);
  } catch (error) {
    console.error('Error fetching user-specific orders:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});



  router.post('/place', async (req, res) => {


   


    try {
      const { ticker, quantity, price, orderTime, orderType } = req.body;
      if (!ticker || !quantity || !price || !orderTime || !orderType) {
        return res.status(400).json({ error: 'All fields are required' });
      }
  
      // Check if user has sufficient funds for buy order
      if (orderType === 'BUY') {
        const totalCost = quantity * price;
        if (totalCost > req.user.amount) {
          return res.status(400).json({ error: 'Insufficient funds' });
        }
        // Reduce user's amount for buy order
        req.user.amount -= totalCost;
      } else if (orderType === 'SELL') {
        const totalCost = quantity * price;
        if (totalCost > req.user.amount) {
          return res.status(400).json({ error: 'Insufficient funds' });
        }
        // Reduce user's amount for buy order
        req.user.amount -= totalCost;
      } else {
        return res.status(400).json({ error: 'Invalid order type' });
      }
  
   
      // Create new order and associate it with the user
      const order = new Order({
        ticker,
        quantity,
        price,
        orderTime,
        orderType,
        user: req.user._id // Assuming req.user contains the authenticated user object
      });
  
      // Save the order
      await order.save();
  
      // Update user's amount in the database for buy order
      // if (orderType === 'BUY') {
      //   await req.user.save();
      // }
  
      return res.status(200).json({ message: 'Order placed successfully' });
    } catch (error) {
      console.error('Error placing order:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  module.exports = router;