const express = require('express');
const { body } = require('express-validator');
const { getTestimonials, createTestimonial, deleteTestimonial } = require('../controllers/testimonialController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getTestimonials);
router.post(
  '/',
  [
    body('parent_name').notEmpty().withMessage('Parent name is required.'),
    body('feedback').notEmpty().withMessage('Feedback text is required.')
  ],
  createTestimonial
);
router.delete('/:id', verifyToken, deleteTestimonial);

module.exports = router;