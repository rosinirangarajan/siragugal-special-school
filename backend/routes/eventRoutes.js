const express = require('express');
const { body } = require('express-validator');
const { getEvents, createEvent, deleteEvent } = require('../controllers/eventController');
const { verifyToken } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

const router = express.Router();

router.get('/', getEvents);
router.post(
  '/',
  verifyToken,
  upload.single('image'),
  [
    body('title').notEmpty().withMessage('Title is required.'),
    body('description').notEmpty().withMessage('Description is required.'),
    body('event_date').notEmpty().withMessage('Event date is required.')
  ],
  createEvent
);
router.delete('/:id', verifyToken, deleteEvent);

module.exports = router;