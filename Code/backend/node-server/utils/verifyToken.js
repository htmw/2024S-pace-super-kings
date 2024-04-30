// verifyToken.js

const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers['authorization'];

  // Check if token is present
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - Missing token' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
    console.log(decoded);
    
    req.user = decoded; // Attach decoded user information to request object
    next(); // Move to next middleware
  } catch (error) {
    console.log(error);
    return res.status(403).json({ message: 'Forbidden - Invalid token' });
  }
};

module.exports = verifyToken;
