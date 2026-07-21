import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/activities', label: 'Activities' },
    { to: '/services', label: 'Services' },
    { to: '/donation', label: 'Donation' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-container" aria-label="Siragugal Special School — Home">
          <img
            src={logoImg}
            alt="Siragugal Special School logo"
            className="navbar-logo-img"
          />
          <div className="navbar-title-wrapper">
            <span className="school-name">Siragugal</span>
            <span className="parent-org">PEACE TRUST</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar-cta-desktop">
          <Link to="/donation" className="nav-donate-btn">Donate Now</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`nav-menu-mobile ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
        <ul className="nav-links-mobile">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mobile-cta-item">
            <Link to="/donation" className="nav-donate-btn mobile" onClick={() => setIsOpen(false)}>
              Donate Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;