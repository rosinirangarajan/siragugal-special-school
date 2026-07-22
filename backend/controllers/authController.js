/**
 * Auth Controller
 * Endpoints:
 * - POST /api/auth/login: Admin Login
 * - GET /api/auth/me: Get Profile of Logged-in Admin
 */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const db = require('../config/db');

// @desc    Admin Login
// @route   POST /api/auth/login
// @access  Public
const loginAdmin = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { email, password } = req.body;

    const [rows] = await db.query('SELECT * FROM admins WHERE email = ?', [email]);
    if (rows.length === 0) {
      return res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }

    const admin = rows[0];
    const isMatch = await bcrypt.compare(password, admin.password_hash);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }

    const token = jwt.sign(
      { id: admin.id, email: admin.email, role: admin.role },
      process.env.JWT_SECRET || 'super_secret_jwt_key_siragugal',
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );

    res.status(200).json({
      success: true,
      message: 'Login successful.',
      token,
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get Current Admin Profile
// @route   GET /api/auth/me
// @access  Private (Admin)
const getMe = async (req, res, next) => {
  try {
    const [rows] = await db.query('SELECT id, name, email, role, created_at FROM admins WHERE id = ?', [req.admin.id]);
    if (rows.length === 0) {
      return res.status(444).json({ success: false, message: 'Admin not found.' });
    }

    res.status(200).json({ success: true, data: rows[0] });
  } catch (error) {
    next(error);
  }
};

module.exports = { loginAdmin, getMe };