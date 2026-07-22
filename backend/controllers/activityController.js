/**
 * Activity Controller
 * Endpoints:
 * - GET /api/activities : Get all activities
 * - GET /api/activities/:id : Get single activity
 * - POST /api/activities : Create activity (Admin)
 * - PUT /api/activities/:id : Update activity (Admin)
 * - DELETE /api/activities/:id : Delete activity (Admin)
 */
const { validationResult } = require('express-validator');
const db = require('../config/db');

const getActivities = async (req, res, next) => {
  try {
    const { category } = req.query;
    let query = 'SELECT * FROM activities';
    let params = [];

    if (category && category !== 'All') {
      query += ' WHERE category = ?';
      params.push(category);
    }

    query += ' ORDER BY created_at DESC';
    const [rows] = await db.query(query, params);

    res.status(200).json({ success: true, count: rows.length, data: rows });
  } catch (error) {
    next(error);
  }
};

const getActivityById = async (req, res, next) => {
  try {
    const [rows] = await db.query('SELECT * FROM activities WHERE id = ?', [req.params.id]);
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Activity not found.' });
    }

    res.status(200).json({ success: true, data: rows[0] });
  } catch (error) {
    next(error);
  }
};

const createActivity = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { title, description, date, category } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const [result] = await db.query(
      'INSERT INTO activities (title, description, date, category, image_url) VALUES (?, ?, ?, ?, ?)',
      [title, description, date, category || 'Celebrations', imageUrl]
    );

    res.status(201).json({
      success: true,
      message: 'Activity created successfully.',
      data: { id: result.insertId, title, description, date, category, image_url: imageUrl }
    });
  } catch (error) {
    next(error);
  }
};

const updateActivity = async (req, res, next) => {
  try {
    const { title, description, date, category } = req.body;
    const activityId = req.params.id;

    const [existing] = await db.query('SELECT * FROM activities WHERE id = ?', [activityId]);
    if (existing.length === 0) {
      return res.status(404).json({ success: false, message: 'Activity not found.' });
    }

    let imageUrl = existing[0].image_url;
    if (req.file) {
      imageUrl = `/uploads/${req.file.filename}`;
    }

    await db.query(
      'UPDATE activities SET title = ?, description = ?, date = ?, category = ?, image_url = ? WHERE id = ?',
      [title || existing[0].title, description || existing[0].description, date || existing[0].date, category || existing[0].category, imageUrl, activityId]
    );

    res.status(200).json({ success: true, message: 'Activity updated successfully.' });
  } catch (error) {
    next(error);
  }
};

const deleteActivity = async (req, res, next) => {
  try {
    const [result] = await db.query('DELETE FROM activities WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Activity not found.' });
    }

    res.status(200).json({ success: true, message: 'Activity deleted successfully.' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getActivities, getActivityById, createActivity, updateActivity, deleteActivity };