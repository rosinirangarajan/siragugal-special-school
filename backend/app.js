const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

// Route imports
const authRoutes = require('./routes/authRoutes');
const activityRoutes = require('./routes/activityRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const staffRoutes = require('./routes/staffRoutes');
const courseRoutes = require('./routes/courseRoutes');
const eventRoutes = require('./routes/eventRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const donationRoutes = require('./routes/donationRoutes');
const contactRoutes = require('./routes/contactRoutes');
const volunteerRoutes = require('./routes/volunteerRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

const errorHandler = require('./middleware/errorHandler');

const app = express();

// Security Middlewares
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || '*',
  credentials: true
}));

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Siragugal Special School API Server is running smoothly.',
    timestamp: new Date()
  });
});

// API Routes Mounting
app.use('/api/auth', authRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/volunteers', volunteerRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Global Error Handler
app.use(errorHandler);

module.exports = app;