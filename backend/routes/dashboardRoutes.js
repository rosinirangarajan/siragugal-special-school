const express = require('express');
const { getDashboardSummary } = require('../controllers/dashboardController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/summary', verifyToken, getDashboardSummary);

module.exports = router;