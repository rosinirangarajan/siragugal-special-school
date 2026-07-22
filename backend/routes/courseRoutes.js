const express = require('express');
const { body } = require('express-validator');
const { getCourses, createCourse, updateCourse, deleteCourse } = require('../controllers/courseController');
const { verifyToken } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

const router = express.Router();

router.get('/', getCourses);
router.post(
  '/',
  verifyToken,
  upload.single('image'),
  [
    body('title').notEmpty().withMessage('Title is required.'),
    body('description').notEmpty().withMessage('Description is required.'),
    body('age_group').notEmpty().withMessage('Age group is required.')
  ],
  createCourse
);
router.put('/:id', verifyToken, upload.single('image'), updateCourse);
router.delete('/:id', verifyToken, deleteCourse);

module.exports = router;