const express = require('express');
const { body } = require('express-validator');
const { createContactMessage, getContactMessages } = require('../controllers/contactController');
const { verifyToken } = require('../middleware/authMiddleware');
const { formLimiter } = require('../middleware/rateLimiter');

const router = express.Router();

router.post(
  '/',
  formLimiter,
  [
    body('name').notEmpty().withMessage('Name is required.'),
    body('email').isEmail().withMessage('Valid email is required.'),
    body('phone').notEmpty().withMessage('Phone number is required.'),
    body('message').notEmpty().withMessage('Message is required.')
  ],
  createContactMessage
);

router.get('/', verifyToken, getContactMessages);

module.exports = router;