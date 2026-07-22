/**
 * Donation Controller
 * Endpoints:
 * - POST /api/donations : Submit a new donation
 * - GET /api/donations : List all donations (Admin)
 */
const { validationResult } = require('express-validator');
const db = require('../config/db');

const createDonation = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { donor_name, donor_email, donor_phone, amount, payment_method, transaction_ref, target_program } = req.body;

    const [result] = await db.query(
      'INSERT INTO donations (donor_name, donor_email, donor_phone, amount, payment_method, transaction_ref, target_program, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [donor_name, donor_email, donor_phone, amount, payment_method || 'Bank Transfer', transaction_ref || null, target_program || 'General Fund', 'Completed']
    );

    res.status(201).json({
      success: true,
      message: 'Thank you! Your donation details have been recorded successfully.',
      data: { id: result.insertId, donor_name, amount, payment_method }
    });
  } catch (error) {
    next(error);
  }
};

const getDonations = async (req, res, next) => {
  try {
    const [rows] = await db.query('SELECT * FROM donations ORDER BY donation_date DESC');
    res.status(200).json({ success: true, count: rows.length, data: rows });
  } catch (error) {
    next(error);
  }
};

module.exports = { createDonation, getDonations };