/**
 * Gallery Controller
 * Endpoints:
 * - GET /api/gallery : Get gallery items
 * - POST /api/gallery : Upload item (Admin)
 * - DELETE /api/gallery/:id : Delete item (Admin)
 */
const { validationResult } = require('express-validator');
const db = require('../config/db');

const getGalleryItems = async (req, res, next) => {
  try {
    const { category } = req.query;
    let query = 'SELECT * FROM gallery';
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

const createGalleryItem = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { title, category } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const [result] = await db.query(
      'INSERT INTO gallery (title, category, image_url) VALUES (?, ?, ?)',
      [title, category || 'School', imageUrl]
    );

    res.status(201).json({
      success: true,
      message: 'Gallery item created successfully.',
      data: { id: result.insertId, title, category, image_url: imageUrl }
    });
  } catch (error) {
    next(error);
  }
};

const deleteGalleryItem = async (req, res, next) => {
  try {
    const [result] = await db.query('DELETE FROM gallery WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Gallery item not found.' });
    }

    res.status(200).json({ success: true, message: 'Gallery item deleted successfully.' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getGalleryItems, createGalleryItem, deleteGalleryItem };