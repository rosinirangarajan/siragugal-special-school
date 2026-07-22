const express = require('express');
const { body } = require('express-validator');
const { createDonation, getDonations } = require('../controllers/donationController');
const { verifyToken } = require('../middleware/authMiddleware');
const { formLimiter } = require('../middleware/rateLimiter');

const router = express.Router();

router.post(
  '/',
  formLimiter,
  [
    body('donor_name').notEmpty().withMessage('Donor name is required.'),
    body('amount').isNumeric().withMessage('Amount must be a valid number.')
  ],
  createDonation
);

router.get('/', verifyToken, getDonations);

module.exports = router;