/**
 * Volunteer Controller
 * Endpoints:
 * - POST /api/volunteers : Register as a volunteer
 * - GET /api/volunteers : Get all volunteer registrations (Admin)
 */
const { validationResult } = require('express-validator');
const db = require('../config/db');

const registerVolunteer = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, email, phone, occupation, availability, reason } = req.body;

    const [result] = await db.query(
      'INSERT INTO volunteers (name, email, phone, occupation, availability, reason) VALUES (?, ?, ?, ?, ?, ?)',
      [name, email, phone, occupation || null, availability || 'Weekends', reason || null]
    );

    res.status(201).json({
      success: true,
      message: 'Volunteer application submitted successfully.',
      data: { id: result.insertId, name, email }
    });
  } catch (error) {
    next(error);
  }
};

const getVolunteers = async (req, res, next) => {
  try {
    const [rows] = await db.query('SELECT * FROM volunteers ORDER BY created_at DESC');
    res.status(200).json({ success: true, count: rows.length, data: rows });
  } catch (error) {
    next(error);
  }
};

module.exports = { registerVolunteer, getVolunteers };