const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

// Create MySQL connection pool using environment variables
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'siragugal_db',
  waitForConnections: true,
  connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT, 10) || 10,
  queueLimit: 0,
  dateStrings: true
});

// Test Database Connection
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Connected to MySQL Database:', process.env.DB_NAME || 'siragugal_db');
    connection.release();
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
  }
})();

module.exports = pool;