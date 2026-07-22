const express = require('express');
const { body } = require('express-validator');
const { getStaff, createStaff, updateStaff, deleteStaff } = require('../controllers/staffController');
const { verifyToken } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

const router = express.Router();

router.get('/', getStaff);
router.post(
  '/',
  verifyToken,
  upload.single('image'),
  [
    body('name').notEmpty().withMessage('Name is required.'),
    body('role').notEmpty().withMessage('Role is required.')
  ],
  createStaff
);
router.put('/:id', verifyToken, upload.single('image'), updateStaff);
router.delete('/:id', verifyToken, deleteStaff);

module.exports = router;