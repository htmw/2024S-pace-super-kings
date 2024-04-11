// server.js

require('dotenv').config(); // Load environment variables from .env file
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(morgan("tiny"));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));


const  {Server} = require('socket.io');
app.use(cors())

/**
 * SOCKET : Start
 */
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000"
  }

});

io.on('connection', (socket) => {
  console.log('New client connected');

  // Listen for user joining
  socket.on('join', (userId) => {
    console.log(`User ${userId} joined`);
    
    // Join a unique room based on user ID
    socket.join(userId);
  });

  // Listen for incoming messages
  socket.on('chat', (message) => {
    console.log('Received message:', message);
     const { userId, data, type, timeStamp } = message;
      socket.to(userId).emit(data);

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
const dashboardRoutes = require('./routes/dashboard');
const stockRoutes = require('./routes/stocks');
const extraRoutes = require('./routes/extra');



app.use('/profile', profileRoutes);
app.use('/auth', authRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/stocks', stockRoutes);
app.use('/extra', extraRoutes);

// Start the server


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});