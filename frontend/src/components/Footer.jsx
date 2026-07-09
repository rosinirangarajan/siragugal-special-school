import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-brand-column">
            <div className="footer-logo">
              <span className="logo-icon">S</span>
              <div className="logo-text">
                <h3>Siragugal</h3>
                <p>PEACE TRUST</p>
              </div>
            </div>
            <p className="brand-description">
              Promoting Exceptional Care and Education since 2007. Empowering children with Autism, ADHD, Intellectual Disabilities, and developmental delays to live with independence and dignity.
            </p>
            <p className="established-tag">Established January 2007 • Registered Non-Profit NGO</p>
          </div>

          <div className="footer-links-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">Programs & Services</Link></li>
              <li><Link to="/activities">Activities</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h4>Support & Connect</h4>
            <ul>
              <li><Link to="/donation">Donate</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><a href="#volunteer">Volunteer (Will be Updated)</a></li>
              <li><a href="#intern">Internships (Will be Updated)</a></li>
              <li><Link to="/admin/login" className="admin-link">Admin Portal</Link></li>
            </ul>
          </div>

          <div className="footer-contact-column">
            <h4>Our Headquarters</h4>
            <address>
              <strong>PEACE TRUST</strong><br />
              No.23, Sivaji Nagar,<br />
              Membalam, Thanjavur,<br />
              Tamil Nadu, India.
            </address>
            <div className="contact-details-list">
              <p><strong>Phone:</strong> Coming Soon</p>
              <p><strong>Email:</strong> Coming Soon</p>
              <p><strong>Hours:</strong> Coming Soon</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright-text">
            &copy; {currentYear} Siragugal Special School. All Rights Reserved. Managed by PEACE TRUST.
          </p>
          <div className="footer-social-links">
            <span className="social-placeholder">Facebook (Coming Soon)</span>
            <span className="social-placeholder">Instagram (Coming Soon)</span>
            <span className="social-placeholder">YouTube (Coming Soon)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
