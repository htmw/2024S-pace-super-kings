// server.js

require('dotenv').config(); // Load environment variables from .env file
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const morgan = require('morgan');
const https = require("https");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3001;
const securePort = process.env.SECURE_PORT || 3002;
app.use(morgan("tiny"));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));


const  {Server} = require('socket.io');
app.use(cors())

/**
 * SOCKET : Start
 */
const server = http.createServer(app);



if (process.env.NODE_ENV === "production") {
  https
    .createServer(
      {
        key: fs.readFileSync(
          "/etc/letsencrypt/live/api.investmatefinance.tech/privkey.pem"
        ),
         cert: fs.readFileSync('/etc/letsencrypt/live/api.investmatefinance.tech/cert.pem'),
        ca: fs.readFileSync(
          "/etc/letsencrypt/live/api.investmatefinance.tech/fullchain.pem"
        ),
      },
      app
    )
    .listen(securePort, () => {
      console.log(`Server Started at PORT: ${securePort}`);
    });
}


var msocket;
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "https://investmatefinance.tech"]
  }

});

io.on('connection', (socket) => {
  msocket = socket;
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
      io.to(userId).emit(userId, data);


     
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
const accountRoutes = require('./routes/account');
const ordersRoutes = require('./routes/orders');
const chatRoutes = require('./routes/chat');
const User = require('./models/User');



app.use('/profile', profileRoutes);
app.use('/auth', authRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/stocks', stockRoutes);
app.use('/account',checkToken,  accountRoutes);
app.use('/extra', extraRoutes);
app.use('/chat', chatRoutes);
app.use('/orders', checkToken, ordersRoutes);
app.get('/pattern', (req, res) => {

  if(msocket)
  msocket.emit("chat", {
    userId: "asdnand",
    data: "oaskdaokdok",
    type: 'text',
    timeStamp: Date.now()
  });
  



  res.json({msg : 'Investmate API'});
});

// Start the server


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




async function checkToken(req, res, next) {

  // Get the token from the request headers
  const token = req.headers.authorization;
  
  try{
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
    var user = await User.findOne({email:decoded.email});

    if(user){
      req.user = user;
      return next();
    }else{
      return res.status(401).json({ error: 'Invalid token' });
    }
  }catch(error){
    console.log("error",error)
    return res.status(401).json({ error: 'Invalid token' });
  
  }

}