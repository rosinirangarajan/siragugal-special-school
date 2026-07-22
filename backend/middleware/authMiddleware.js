const jwt = require('jsonwebtoken');

// Verify JWT token middleware
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'Access denied. No token provided.'
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'super_secret_jwt_key_siragugal');
    req.admin = decoded; // Attach admin payload (id, email, role) to request
    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: 'Invalid or expired token.'
    });
  }
};

module.exports = { verifyToken };