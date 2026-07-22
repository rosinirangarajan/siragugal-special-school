const express = require('express');
const { body } = require('express-validator');
const { registerVolunteer, getVolunteers } = require('../controllers/volunteerController');
const { verifyToken } = require('../middleware/authMiddleware');
const { formLimiter } = require('../middleware/rateLimiter');

const router = express.Router();

router.post(
  '/',
  formLimiter,
  [
    body('name').notEmpty().withMessage('Name is required.'),
    body('email').isEmail().withMessage('Valid email is required.'),
    body('phone').notEmpty().withMessage('Phone number is required.')
  ],
  registerVolunteer
);

router.get('/', verifyToken, getVolunteers);

module.exports = router;