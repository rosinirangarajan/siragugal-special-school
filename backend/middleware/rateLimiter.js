const rateLimit = require('express-rate-limit');

// Limiter for public form submissions (Contact, Donations, Volunteer)
const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes window
  max: 20, // Max 20 requests per IP per window
  message: {
    success: false,
    message: 'Too many submissions from this IP. Please try again after 15 minutes.'
  },
  standardHeaders: true,
  legacyHeaders: false
});

// Limiter for Admin login route
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // 5 login attempts per 15 minutes
  message: {
    success: false,
    message: 'Too many login attempts. Please try again after 15 minutes.'
  }
});

module.exports = { formLimiter, loginLimiter };