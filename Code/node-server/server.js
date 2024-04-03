// server.js

require('dotenv').config(); // Load environment variables from .env file
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

const  {Server} = require('socket.io');


/**
 * SOCKET : Start
 */
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('New client connected');

  // Listen for user joining
  socket.on('join', (userId) => {
    console.log(`User ${userId} joined`);
    
    // Join a unique room based on user ID
    socket.join(userId);
  });

  // Listen for incoming messages
  socket.on('message', (data) => {
    console.log('Received message:', data);
    const { userId, message } = data;

    // Broadcast the message to all clients in the same room (user's room)
    io.to(userId).emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});


/**
 * Socket end
 */






// Middleware
app.use(bodyParser.json());

// MongoDB Atlas credentials from environment variables
const dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

// Connect to MongoDB Atlas
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });



  
  // Apply token verification middleware to all routes


  


// Routes
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
app.use('/profile', profileRoutes);
const dashboardRoutes = require('./routes/dashboard');
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/dashboard', dashboardRoutes);

// Start the server


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});