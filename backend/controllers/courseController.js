/**
 * Course Controller
 * Endpoints:
 * - GET /api/courses : List all courses
 * - POST /api/courses : Create course (Admin)
 * - PUT /api/courses/:id : Update course (Admin)
 * - DELETE /api/courses/:id : Delete course (Admin)
 */
const { validationResult } = require('express-validator');
const db = require('../config/db');

const getCourses = async (req, res, next) => {
  try {
    const [rows] = await db.query('SELECT * FROM courses ORDER BY id ASC');
    res.status(200).json({ success: true, count: rows.length, data: rows });
  } catch (error) {
    next(error);
  }
};

const createCourse = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { title, description, benefits, age_group } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const [result] = await db.query(
      'INSERT INTO courses (title, description, benefits, age_group, image_url) VALUES (?, ?, ?, ?, ?)',
      [title, description, benefits, age_group, imageUrl]
    );

    res.status(201).json({
      success: true,
      message: 'Course/Program created successfully.',
      data: { id: result.insertId, title, description, benefits, age_group, image_url: imageUrl }
    });
  } catch (error) {
    next(error);
  }
};

const updateCourse = async (req, res, next) => {
  try {
    const { title, description, benefits, age_group } = req.body;
    const courseId = req.params.id;

    const [existing] = await db.query('SELECT * FROM courses WHERE id = ?', [courseId]);
    if (existing.length === 0) {
      return res.status(404).json({ success: false, message: 'Course not found.' });
    }

    let imageUrl = existing[0].image_url;
    if (req.file) {
      imageUrl = `/uploads/${req.file.filename}`;
    }

    await db.query(
      'UPDATE courses SET title = ?, description = ?, benefits = ?, age_group = ?, image_url = ? WHERE id = ?',
      [title || existing[0].title, description || existing[0].description, benefits || existing[0].benefits, age_group || existing[0].age_group, imageUrl, courseId]
    );

    res.status(200).json({ success: true, message: 'Course updated successfully.' });
  } catch (error) {
    next(error);
  }
};

const deleteCourse = async (req, res, next) => {
  try {
    const [result] = await db.query('DELETE FROM courses WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Course not found.' });
    }

    res.status(200).json({ success: true, message: 'Course deleted successfully.' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getCourses, createCourse, updateCourse, deleteCourse };