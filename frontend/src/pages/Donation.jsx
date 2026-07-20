import React from 'react';
import './Donation.css';

const Donation = () => {
  const sponsorCategories = [
    { title: "Sponsor Special Education", icon: "📚", target: "Classroom teaching systems & IEP books." },
    { title: "Sponsor Clinical Therapy", icon: "🩺", target: "Speech, Occupational, and Physiotherapies." },
    { title: "Sponsor Student Nutrition", icon: "🍎", target: "Providing daily healthy lunch & energy foods." },
    { title: "Sponsor Special Transportation", icon: "🚌", target: "Assisting children commute to school safely." },
    { title: "Sponsor Learning Materials", icon: "🎨", target: "Purchase sensory toys & educational kits." },
    { title: "Sponsor Annual Events", icon: "🎈", target: "Funding celebrations, tours, & sports programs." }
  ];

  return (
    <div className="donation-page animate-fade-in">
      {/* Hero Section */}
      <section className="donation-hero">
        <div className="donation-hero-container">
          <div className="hero-text-content">
            <span className="badge">Support Us</span>
            <h1>Sponsor Hope & Independence</h1>
            <p className="hero-subtitle">
              Your support helps children with developmental disabilities access critical therapy and special educators daily.
            </p>
            <div className="hero-btn-group">
              <a href="#payment-methods" className="btn-primary">Donate Now</a>
              <a href="#sponsor-categories" className="btn-secondary">Learn More</a>
            </div>
          </div>
          
          <div className="hero-visual-illustration">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" fill="var(--color-accent-tint)" />
              <path d="M100 50 C90 35, 60 35, 50 55 C40 75, 75 110, 100 135 C125 110, 160 75, 150 55 C140 35, 110 35, 100 50 Z" fill="var(--color-accent)" opacity="0.15" />
              <path d="M100 70 C93 58, 72 58, 65 72 C58 87, 82 112, 100 130 C118 112, 142 87, 135 72 C128 58, 107 58, 100 70 Z" fill="var(--color-accent)" opacity="0.8" />
              <path d="M60 140 C80 125, 120 125, 140 140" stroke="var(--color-text-muted)" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* Why Donations Matter & Trust Badges */}
      <section className="impact-section section-padding-custom">
        <div className="donation-container grid-2">
          <div className="impact-text">
            <h2 className="section-heading-custom">Why Your Donation Matters</h2>
            <div className="heading-divider"></div>
            <p>
              Siragugal Special School (run by <strong>PEACE TRUST</strong>) is a registered non-profit organization. We rely heavily on individual donations and government grants to support children whose families cannot afford therapies.
            </p>
            <p>
              By sponsoring a child, you pay for their clinical therapies, educational tools, nutritional diets, and classroom helpers. Every contribution contributes to transforming a child from being dependent to self-sufficient.
            </p>
          </div>
          <div className="impact-summary-card glass-card">
            <h4>100% Transparency & Commitment</h4>
            <div className="trust-badges-grid">
              <div className="trust-badge-item">
                <span className="badge-icon">✓</span>
                <span className="badge-text">Registered Non-Profit Organization</span>
              </div>
              <div className="trust-badge-item">
                <span className="badge-icon">✓</span>
                <span className="badge-text">Transparent Fund Usage</span>
              </div>
              <div className="trust-badge-item">
                <span className="badge-icon">✓</span>
                <span className="badge-text">Child-Centered Programs</span>
              </div>
              <div className="trust-badge-item">
                <span className="badge-icon">✓</span>
                <span className="badge-text">Community Supported Since 2007</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Categories */}
      <section id="sponsor-categories" className="sponsor-categories-section section-padding-custom">
        <div className="donation-container">
          <h2 className="section-title">Sponsorship Categories</h2>
          <div className="heading-divider center"></div>
          <p className="section-subtitle">Pick a specific rehabilitation program to sponsor today.</p>
          <div className="sponsor-grid">
            {sponsorCategories.map((cat, idx) => (
              <div key={idx} className="sponsor-card glass-card glass-card-hover">
                <div className="sponsor-card-header">
                  <span className="sponsor-card-icon">{cat.icon}</span>
                  <h3>{cat.title}</h3>
                </div>
                <p>{cat.target}</p>
                <div className="sponsor-amount">Contact Us for Sponsorship Details</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned Donation Options (Only Bank & UPI QR Code) */}
      <section id="payment-methods" className="payment-section section-padding-custom">
        <div className="donation-container">
          <h2 className="section-title">Donation Options</h2>
          <div className="heading-divider center"></div>
          <p className="section-subtitle">Official payment details for domestic and international support.</p>
          
          <div className="payment-placeholders-grid">
            {/* Card 1: Bank Account Details */}
            <div className="payment-card glass-card">
              <div className="payment-card-header">
                <div className="payment-icon">🏦</div>
                <h3>Bank Account Details</h3>
              </div>
              <div className="payment-fields-list">
                <div className="field-row">
                  <span className="field-label">Account Name:</span>
                  <span className="field-placeholder-line">____________________</span>
                </div>
                <div className="field-row">
                  <span className="field-label">Account Number:</span>
                  <span className="field-placeholder-line">____________________</span>
                </div>
                <div className="field-row">
                  <span className="field-label">Bank Name:</span>
                  <span className="field-placeholder-line">____________________</span>
                </div>
                <div className="field-row">
                  <span className="field-label">Branch:</span>
                  <span className="field-placeholder-line">____________________</span>
                </div>
                <div className="field-row">
                  <span className="field-label">IFSC Code:</span>
                  <span className="field-placeholder-line">____________________</span>
                </div>
                <div className="field-row">
                  <span className="field-label">Swift Code (Optional):</span>
                  <span className="field-placeholder-line">____________________</span>
                </div>
              </div>
              <p className="card-footer-info">
                Official banking information will be updated by the administrator.
              </p>
            </div>
            
            {/* Card 2: UPI QR Code */}
            <div className="payment-card glass-card qr-card-layout">
              <div className="payment-card-header">
                <div className="payment-icon">📱</div>
                <h3>UPI QR Code</h3>
              </div>
              
              <div className="qr-code-placeholder-box">
                <span>QR CODE PLACEHOLDER</span>
              </div>

              <div className="payment-fields-list">
                <div className="field-row">
                  <span className="field-label">UPI ID:</span>
                  <span className="field-placeholder-line">____________________</span>
                </div>
                <div className="field-row">
                  <span className="field-label">Merchant Name:</span>
                  <span className="field-placeholder-line">____________________</span>
                </div>
              </div>
              <p className="card-footer-info">
                Scan using any UPI application.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donation;