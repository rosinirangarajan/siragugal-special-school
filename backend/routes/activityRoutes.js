const express = require('express');
const { body } = require('express-validator');
const { getActivities, getActivityById, createActivity, updateActivity, deleteActivity } = require('../controllers/activityController');
const { verifyToken } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

const router = express.Router();

router.get('/', getActivities);
router.get('/:id', getActivityById);

router.post(
  '/',
  verifyToken,
  upload.single('image'),
  [
    body('title').notEmpty().withMessage('Title is required.'),
    body('description').notEmpty().withMessage('Description is required.'),
    body('date').notEmpty().withMessage('Date is required.')
  ],
  createActivity
);

router.put('/:id', verifyToken, upload.single('image'), updateActivity);
router.delete('/:id', verifyToken, deleteActivity);

module.exports = router;