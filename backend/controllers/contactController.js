/**
 * Contact Controller
 * Endpoints:
 * - POST /api/contact : Submit contact form
 * - GET /api/contact : Get all contact messages (Admin)
 */
const { validationResult } = require('express-validator');
const db = require('../config/db');

const createContactMessage = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, email, phone, subject, message } = req.body;

    const [result] = await db.query(
      'INSERT INTO contact_messages (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)',
      [name, email, phone, subject || 'General Inquiry', message]
    );

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been submitted successfully.',
      data: { id: result.insertId, name, email }
    });
  } catch (error) {
    next(error);
  }
};

const getContactMessages = async (req, res, next) => {
  try {
    const [rows] = await db.query('SELECT * FROM contact_messages ORDER BY created_at DESC');
    res.status(200).json({ success: true, count: rows.length, data: rows });
  } catch (error) {
    next(error);
  }
};

module.exports = { createContactMessage, getContactMessages };