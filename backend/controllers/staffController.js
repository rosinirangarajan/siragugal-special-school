/**
 * Staff Controller
 * Endpoints:
 * - GET /api/staff : Get staff members
 * - POST /api/staff : Create staff (Admin)
 * - PUT /api/staff/:id : Update staff (Admin)
 * - DELETE /api/staff/:id : Delete staff (Admin)
 */
const { validationResult } = require('express-validator');
const db = require('../config/db');

const getStaff = async (req, res, next) => {
  try {
    const { category } = req.query;
    let query = 'SELECT * FROM staff';
    let params = [];

    if (category) {
      query += ' WHERE category = ?';
      params.push(category);
    }

    query += ' ORDER BY id ASC';
    const [rows] = await db.query(query, params);

    res.status(200).json({ success: true, count: rows.length, data: rows });
  } catch (error) {
    next(error);
  }
};

const createStaff = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, role, qualifications, description, category } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const [result] = await db.query(
      'INSERT INTO staff (name, role, qualifications, description, category, image_url) VALUES (?, ?, ?, ?, ?, ?)',
      [name, role, qualifications, description, category || 'Therapist', imageUrl]
    );

    res.status(201).json({
      success: true,
      message: 'Staff member created successfully.',
      data: { id: result.insertId, name, role, qualifications, category, image_url: imageUrl }
    });
  } catch (error) {
    next(error);
  }
};

const updateStaff = async (req, res, next) => {
  try {
    const { name, role, qualifications, description, category } = req.body;
    const staffId = req.params.id;

    const [existing] = await db.query('SELECT * FROM staff WHERE id = ?', [staffId]);
    if (existing.length === 0) {
      return res.status(404).json({ success: false, message: 'Staff member not found.' });
    }

    let imageUrl = existing[0].image_url;
    if (req.file) {
      imageUrl = `/uploads/${req.file.filename}`;
    }

    await db.query(
      'UPDATE staff SET name = ?, role = ?, qualifications = ?, description = ?, category = ?, image_url = ? WHERE id = ?',
      [name || existing[0].name, role || existing[0].role, qualifications || existing[0].qualifications, description || existing[0].description, category || existing[0].category, imageUrl, staffId]
    );

    res.status(200).json({ success: true, message: 'Staff member updated successfully.' });
  } catch (error) {
    next(error);
  }
};

const deleteStaff = async (req, res, next) => {
  try {
    const [result] = await db.query('DELETE FROM staff WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Staff member not found.' });
    }

    res.status(200).json({ success: true, message: 'Staff member deleted successfully.' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getStaff, createStaff, updateStaff, deleteStaff };