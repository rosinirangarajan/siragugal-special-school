/**
 * Event Controller
 * Endpoints:
 * - GET /api/events : List all events
 * - POST /api/events : Create event (Admin)
 * - DELETE /api/events/:id : Delete event (Admin)
 */
const { validationResult } = require('express-validator');
const db = require('../config/db');

const getEvents = async (req, res, next) => {
  try {
    const [rows] = await db.query('SELECT * FROM events ORDER BY event_date DESC');
    res.status(200).json({ success: true, count: rows.length, data: rows });
  } catch (error) {
    next(error);
  }
};

const createEvent = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { title, description, event_date, location } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const [result] = await db.query(
      'INSERT INTO events (title, description, event_date, location, image_url) VALUES (?, ?, ?, ?, ?)',
      [title, description, event_date, location || 'Thanjavur Center', imageUrl]
    );

    res.status(201).json({
      success: true,
      message: 'Event created successfully.',
      data: { id: result.insertId, title, description, event_date, location, image_url: imageUrl }
    });
  } catch (error) {
    next(error);
  }
};

const deleteEvent = async (req, res, next) => {
  try {
    const [result] = await db.query('DELETE FROM events WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Event not found.' });
    }

    res.status(200).json({ success: true, message: 'Event deleted successfully.' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getEvents, createEvent, deleteEvent };