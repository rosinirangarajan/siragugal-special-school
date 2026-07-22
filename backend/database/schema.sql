-- Database Schema for Siragugal Special School (PEACE TRUST)
CREATE DATABASE IF NOT EXISTS `siragugal_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `siragugal_db`;

-- 1. Admins Table
CREATE TABLE IF NOT EXISTS `admins` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(150) NOT NULL UNIQUE,
  `password_hash` VARCHAR(255) NOT NULL,
  `role` ENUM('SuperAdmin', 'Admin', 'Staff') DEFAULT 'Admin',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Default Admin User (Password: admin123)
INSERT INTO `admins` (`name`, `email`, `password_hash`, `role`)
SELECT 'Managing Director', 'admin@siragugal.org', '$2b$10$w8TKnN9kLHQXb/N.1K7lM.U6wI3c8f8e0SgB4mZ6qY.2XpY6p1iGe', 'SuperAdmin'
WHERE NOT EXISTS (SELECT 1 FROM `admins` WHERE `email` = 'admin@siragugal.org');

-- 2. Activities Table
CREATE TABLE IF NOT EXISTS `activities` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(200) NOT NULL,
  `description` TEXT NOT NULL,
  `date` VARCHAR(100) NOT NULL,
  `category` ENUM('Celebrations', 'Awareness', 'Tours', 'Educational', 'Sports') DEFAULT 'Celebrations',
  `image_url` VARCHAR(255) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 3. Gallery Table
CREATE TABLE IF NOT EXISTS `gallery` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(200) NOT NULL,
  `category` ENUM('School', 'Therapy', 'Sports', 'Celebrations', 'Infrastructure', 'Tours', 'Events') DEFAULT 'School',
  `image_url` VARCHAR(255) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 4. Staff Table
CREATE TABLE IF NOT EXISTS `staff` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(150) NOT NULL,
  `role` VARCHAR(150) NOT NULL,
  `qualifications` TEXT DEFAULT NULL,
  `description` TEXT DEFAULT NULL,
  `category` ENUM('Leadership', 'Special Educator', 'Therapist', 'Caregiver') DEFAULT 'Therapist',
  `image_url` VARCHAR(255) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 5. Courses / Programs Table
CREATE TABLE IF NOT EXISTS `courses` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(200) NOT NULL,
  `description` TEXT NOT NULL,
  `benefits` TEXT DEFAULT NULL,
  `age_group` VARCHAR(100) NOT NULL,
  `image_url` VARCHAR(255) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 6. Events Table
CREATE TABLE IF NOT EXISTS `events` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(200) NOT NULL,
  `description` TEXT NOT NULL,
  `event_date` DATE NOT NULL,
  `location` VARCHAR(200) DEFAULT 'Thanjavur Center',
  `image_url` VARCHAR(255) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 7. Testimonials Table
CREATE TABLE IF NOT EXISTS `testimonials` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `parent_name` VARCHAR(150) NOT NULL,
  `rating` INT DEFAULT 5,
  `feedback` TEXT NOT NULL,
  `student_condition` VARCHAR(150) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 8. Donations Table
CREATE TABLE IF NOT EXISTS `donations` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `donor_name` VARCHAR(150) NOT NULL,
  `donor_email` VARCHAR(150) DEFAULT NULL,
  `donor_phone` VARCHAR(30) DEFAULT NULL,
  `amount` DECIMAL(10,2) NOT NULL,
  `payment_method` ENUM('UPI', 'Bank Transfer', 'Cheque', 'Cash', 'Online') DEFAULT 'Bank Transfer',
  `transaction_ref` VARCHAR(100) DEFAULT NULL,
  `target_program` VARCHAR(150) DEFAULT 'General Fund',
  `status` ENUM('Completed', 'Pending', 'Failed') DEFAULT 'Completed',
  `donation_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 9. Contact Messages Table
CREATE TABLE IF NOT EXISTS `contact_messages` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `phone` VARCHAR(30) NOT NULL,
  `subject` VARCHAR(200) DEFAULT NULL,
  `message` TEXT NOT NULL,
  `status` ENUM('Unread', 'Read', 'Responded') DEFAULT 'Unread',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 10. Volunteer Registrations Table
CREATE TABLE IF NOT EXISTS `volunteers` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `phone` VARCHAR(30) NOT NULL,
  `occupation` VARCHAR(150) DEFAULT NULL,
  `availability` VARCHAR(100) DEFAULT 'Weekends',
  `reason` TEXT DEFAULT NULL,
  `status` ENUM('Pending', 'Approved', 'Rejected') DEFAULT 'Pending',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;