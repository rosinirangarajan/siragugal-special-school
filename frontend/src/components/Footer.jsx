import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo/logo.png';
import './Footer.css';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/courses', label: 'Programs & Services' },
  { to: '/activities', label: 'Activities' },
  { to: '/gallery', label: 'Gallery' },
];

const supportLinks = [
  { to: '/donation', label: 'Donate', type: 'link' },
  { to: '/contact', label: 'Contact Us', type: 'link' },
  { to: '/admin/login', label: 'Admin Portal', type: 'link', className: 'admin-link' },
];

/* Inline SVG icons (small, no library dependency) */
const icons = {
  location: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
  phone: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  ),
  mail: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
  ),
  clock: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  ),
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-top">
        <div className="footer-container">

          {/* Brand Column */}
          <div className="footer-brand-column">
            <div className="footer-logo">
              <img src={logoImg} alt="Siragugal Special School logo" className="footer-logo-img" />
              <div className="logo-text">
                <h3>Siragugal</h3>
                <p>PEACE TRUST</p>
              </div>
            </div>
            <p className="brand-description">
              Promoting Exceptional Care and Education since 2007. Empowering children
              with Autism, ADHD, Intellectual Disabilities, and developmental delays
              to live with independence and dignity.
            </p>
            <p className="established-tag">Established January 2007 • Registered Non-Profit NGO</p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-column">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.to}><Link to={link.to}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Support & Connect */}
          <div className="footer-links-column">
            <h4>Support &amp; Connect</h4>
            <ul>
              {supportLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={link.className || ''}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-contact-column">
            <h4>Our Headquarters</h4>

            <div className="contact-row">
              <span className="contact-icon">{icons.location}</span>
              <address>
                <strong>PEACE TRUST</strong><br />
                No.23, Sivaji Nagar,<br />
                Membalam, Thanjavur,<br />
                Tamil Nadu, India.
              </address>
            </div>

            <div className="contact-details-list">
              <div className="contact-row">
                <span className="contact-icon">{icons.phone}</span>
                <div>
                  <p><strong>Phone</strong></p>
                  <p>1. &lt;phone number&gt;</p>
                  <p>2. &lt;phone number&gt;</p>
                </div>
              </div>

              <div className="contact-row">
                <span className="contact-icon">{icons.mail}</span>
                <div>
                  <p><strong>Email</strong></p>
                  <p>
                    <a href="mailto:siragugal.peace@gmail.com" className="footer-email-link">
                      siragugal.peace@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-row">
                <span className="contact-icon">{icons.clock}</span>
                <div>
                  <p><strong>Hours</strong></p>
                  <p>Monday – Saturday: 09:00 AM – 04:30 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
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