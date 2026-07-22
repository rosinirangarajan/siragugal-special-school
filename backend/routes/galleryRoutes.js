const express = require('express');
const { body } = require('express-validator');
const { getGalleryItems, createGalleryItem, deleteGalleryItem } = require('../controllers/galleryController');
const { verifyToken } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

const router = express.Router();

router.get('/', getGalleryItems);
router.post(
  '/',
  verifyToken,
  upload.single('image'),
  [body('title').notEmpty().withMessage('Title is required.')],
  createGalleryItem
);
router.delete('/:id', verifyToken, deleteGalleryItem);

module.exports = router;