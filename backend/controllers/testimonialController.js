/**
 * Testimonial Controller
 * Endpoints:
 * - GET /api/testimonials : List all testimonials
 * - POST /api/testimonials : Add testimonial (Admin/Public)
 * - DELETE /api/testimonials/:id : Delete testimonial (Admin)
 */
const { validationResult } = require('express-validator');
const db = require('../config/db');

const getTestimonials = async (req, res, next) => {
  try {
    const [rows] = await db.query('SELECT * FROM testimonials ORDER BY created_at DESC');
    res.status(200).json({ success: true, count: rows.length, data: rows });
  } catch (error) {
    next(error);
  }
};

const createTestimonial = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { parent_name, rating, feedback, student_condition } = req.body;

    const [result] = await db.query(
      'INSERT INTO testimonials (parent_name, rating, feedback, student_condition) VALUES (?, ?, ?, ?)',
      [parent_name, rating || 5, feedback, student_condition]
    );

    res.status(201).json({
      success: true,
      message: 'Testimonial added successfully.',
      data: { id: result.insertId, parent_name, rating, feedback, student_condition }
    });
  } catch (error) {
    next(error);
  }
};

const deleteTestimonial = async (req, res, next) => {
  try {
    const [result] = await db.query('DELETE FROM testimonials WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Testimonial not found.' });
    }

    res.status(200).json({ success: true, message: 'Testimonial deleted successfully.' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getTestimonials, createTestimonial, deleteTestimonial };