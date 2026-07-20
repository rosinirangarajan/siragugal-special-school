import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const slides = [
    {
      title: "Interactive Special Classrooms",
      description: "Tailored educational pathways that adapt to every child's unique pace and style of learning.",
      color: "linear-gradient(135deg, #C81E2C, #F5C518)" /* Accent Red to Accent Gold */
    },
    {
      title: "Multidisciplinary Therapies",
      description: "Speech, Occupational, and Physiotherapies integrated to support complete physical and vocal growth.",
      color: "linear-gradient(135deg, #8A8D91, #C81E2C)" /* Wing Grey to Accent Red */
    },
    {
      title: "Early Intervention Programs",
      description: "Identifying and supporting developmental delays early to enable future independence and confidence.",
      color: "linear-gradient(135deg, #F5C518, #8A8D91)" /* Gold to Wing Grey */
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { number: "2007", label: "Year Established" },
    { number: "3", label: "Special Schools" },
    { number: "3", label: "Early Intervention Centres" },
    { number: "100%", label: "Dedicated Care" }
  ];

  const facilities = [
    { title: "Special Classrooms", desc: "Equipped with custom learning tools." },
    { title: "Therapy Rooms", desc: "Private, safe environment for therapeutic sessions." },
    { title: "Vocational Units", desc: "Workspaces to learn crafts and professional tasks." },
    { title: "Rehabilitation Centre", desc: "Complete support infrastructure for physical needs." }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content animate-slide-up">
            <span className="badge">Siragugal Special School</span>
            <h1 className="hero-title">
              Helping Every Child <br />
              <span className="text-highlight">Learn, Grow & Shine</span>
            </h1>
            <p className="hero-description">
              Siragugal is a specialized initiative of the PEACE TRUST. Since 2007, we have dedicated our care to children with Autism, ADHD, Intellectual Disabilities, Down Syndrome, and Speech Delays in Tamil Nadu, India.
            </p>
            <div className="hero-ctas">
              <Link to="/donation" className="btn-primary">Donate Now</Link>
              <Link to="/about" className="btn-secondary">Learn More</Link>
            </div>
          </div>

          <div className="hero-slider-wrapper">
            <div className="slider-card" style={{ background: slides[activeSlide].color }}>
              <div className="slider-glow"></div>
              <div className="slider-card-content">
                <h3>{slides[activeSlide].title}</h3>
                <p>{slides[activeSlide].description}</p>
                <div className="slider-indicator-group">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator-dot ${index === activeSlide ? 'active' : ''}`}
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card glass-card">
              <h2 className="stat-number">{stat.number}</h2>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Introduction Preview */}
      <section className="intro-preview section-padding">
        <div className="intro-container">
          <div className="intro-text-block">
            <span className="section-label">Who We Are</span>
            <h2 className="intro-title">Inclusive Education & Care for Exceptional Minds</h2>
            <p>
              Under the parent organization <strong>PEACE TRUST</strong> (Promote Exceptionals And Create Evolution Trust), Siragugal has built branches across <strong>Thanjavur</strong>, <strong>Pattukottai</strong>, and our newly opened branch in <strong>Kumbakonam</strong>. We target cognitive, emotional, and social parameters using individual support programs.
            </p>
            <Link to="/about" className="learn-more-link">Read our full history &rarr;</Link>
          </div>
          <div className="intro-feature-grid">
            <div className="feature-item glass-card">
              <h4>Special Education</h4>
              <p>Academics designed with therapeutic and behavioral benchmarks.</p>
            </div>
            <div className="feature-item glass-card">
              <h4>Family Support</h4>
              <p>Providing parent counseling and orientation to guide home care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="facilities-section section-padding">
        <div className="container">
          <h2 className="section-title">Our Facilities</h2>
          <p className="section-subtitle">A nurturing and fully equipped infrastructure supporting developmental growth.</p>
          <div className="facilities-grid">
            {facilities.map((fac, idx) => (
              <div key={idx} className="facility-card glass-card glass-card-hover">
                <div className="facility-icon">✓</div>
                <h3>{fac.title}</h3>
                <p>{fac.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Banner Section */}
      <section className="cta-banner-section">
        <div className="cta-banner-card">
          <div className="cta-banner-content">
            <h2>Support Our Mission</h2>
            <p>Every contribution, big or small, helps us provide special therapy, nutritious meals, and quality rehabilitation to children in need.</p>
            <div className="cta-actions">
              <Link to="/donation" className="btn-primary" style={{ background: '#FFFFFF', color: 'var(--color-accent)', boxShadow: 'none' }}>Donate Now</Link>
              <Link to="/contact" className="btn-secondary" style={{ color: '#FFFFFF', borderColor: 'var(--color-white)', background: 'transparent' }}>Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;