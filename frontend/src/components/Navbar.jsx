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
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-container">
          <img
            src={logoImg}
            alt="Siragugal Special School Logo"
            className="navbar-logo-img"
          />
          <div className="navbar-title-wrapper">
            <span className="school-name">Siragugal</span>
            <span className="parent-org">PEACE TRUST</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink></li>
          <li><NavLink to="/activities" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Activities</NavLink></li>
          <li><NavLink to="/courses" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Courses</NavLink></li>
          <li><NavLink to="/donation" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Donation</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink></li>
        </ul>

        <div className="navbar-cta-desktop">
          <Link to="/donation" className="nav-donate-btn">Donate Now</Link>
        </div>

        {/* Mobile Hamburger */}
        <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`nav-menu-mobile ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links-mobile">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li><Link to="/activities" onClick={() => setIsOpen(false)}>Activities</Link></li>
          <li><Link to="/courses" onClick={() => setIsOpen(false)}>Courses & Programs</Link></li>
          <li><Link to="/donation" onClick={() => setIsOpen(false)}>Donation</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li className="mobile-cta-item">
            <Link to="/donation" className="nav-donate-btn mobile" onClick={() => setIsOpen(false)}>Donate Now</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;