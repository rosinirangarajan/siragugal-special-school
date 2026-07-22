/**
 * Dashboard Controller
 * Endpoint: GET /api/dashboard/summary (Admin Only)
 */
const db = require('../config/db');

const getDashboardSummary = async (req, res, next) => {
  try {
    // Total Sum of Donations
    const [[{ totalDonationsAmount }]] = await db.query('SELECT COALESCE(SUM(amount), 0) AS totalDonationsAmount FROM donations WHERE status = "Completed"');
    
    // Total Volunteers
    const [[{ totalVolunteers }]] = await db.query('SELECT COUNT(*) AS totalVolunteers FROM volunteers');

    // Total Activities
    const [[{ totalActivities }]] = await db.query('SELECT COUNT(*) AS totalActivities FROM activities');

    // Total Events
    const [[{ totalEvents }]] = await db.query('SELECT COUNT(*) AS totalEvents FROM events');

    // Recent 5 Donations
    const [recentDonations] = await db.query('SELECT * FROM donations ORDER BY donation_date DESC LIMIT 5');

    // Recent 5 Contact Messages
    const [recentMessages] = await db.query('SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT 5');

    // Recent 5 Volunteers
    const [recentVolunteers] = await db.query('SELECT * FROM volunteers ORDER BY created_at DESC LIMIT 5');

    res.status(200).json({
      success: true,
      data: {
        stats: {
          totalDonationsAmount: parseFloat(totalDonationsAmount),
          totalVolunteers,
          totalActivities,
          totalEvents
        },
        recentDonations,
        recentMessages,
        recentVolunteers
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getDashboardSummary };