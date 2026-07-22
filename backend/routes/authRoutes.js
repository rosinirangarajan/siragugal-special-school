const express = require('express');
const { body } = require('express-validator');
const { loginAdmin, getMe } = require('../controllers/authController');
const { verifyToken } = require('../middleware/authMiddleware');
const { loginLimiter } = require('../middleware/rateLimiter');

const router = express.Router();

router.post(
  '/login',
  loginLimiter,
  [
    body('email').isEmail().withMessage('Valid email is required.'),
    body('password').notEmpty().withMessage('Password is required.')
  ],
  loginAdmin
);

router.get('/me', verifyToken, getMe);

module.exports = router;