import React from 'react';
import './Donation.css';

const Donation = () => {
  const sponsorCategories = [
    { title: "Sponsor Special Education", target: "Classroom teaching systems & IEP books.", amount: "Coming Soon" },
    { title: "Sponsor Clinical Therapy", target: "Speech, Occupational, and Physiotherapies.", amount: "Coming Soon" },
    { title: "Sponsor Student Nutrition", target: "Providing daily healthy lunch & energy foods.", amount: "Coming Soon" },
    { title: "Sponsor Special Transportation", target: "Assisting children commute to school safely.", amount: "Coming Soon" },
    { title: "Sponsor Learning Materials", target: "Purchase sensory toys & educational kits.", amount: "Coming Soon" },
    { title: "Sponsor Annual Events", target: "Funding celebrations, tours, & sports programs.", amount: "Coming Soon" }
  ];

  return (
    <div className="donation-page animate-fade-in">
      <section className="donation-hero">
        <div className="container">
          <span className="badge">Support Us</span>
          <h1>Sponsor Hope & Independence</h1>
          <p>Your support helps children with developmental disabilities access critical therapy and special educators daily.</p>
        </div>
      </section>

      {/* Why Donations Matter */}
      <section className="impact-section section-padding">
        <div className="donation-container grid-2">
          <div className="impact-text">
            <h2>Why Your Donation Matters</h2>
            <p>
              Siragugal Special School (run by <strong>PEACE TRUST</strong>) is a registered non-profit organization. We rely heavily on individual donations and government grants to support children whose families cannot afford therapies.
            </p>
            <p>
              By sponsoring a child, you pay for their clinical therapies, educational tools, nutritional diets, and classroom helpers. Every contribution contributes to transforming a child from being dependent to self-sufficient.
            </p>
          </div>
          <div className="impact-summary-card glass-card">
            <h4>100% Transparency</h4>
            <p>Every single rupee donated is utilized strictly for children's rehabilitation programs, caregivers' wages, and therapeutic device procurement.</p>
            <div className="reg-id">NGO Registration No: Available on request</div>
          </div>
        </div>
      </section>

      {/* Sponsoring Options */}
      <section className="sponsor-categories-section section-padding">
        <div className="donation-container">
          <h2 className="section-title">Sponsorship Categories</h2>
          <p className="section-subtitle">Pick a specific rehabilitation program to sponsor today.</p>
          <div className="sponsor-grid">
            {sponsorCategories.map((cat, idx) => (
              <div key={idx} className="sponsor-card glass-card">
                <h3>{cat.title}</h3>
                <p>{cat.target}</p>
                <div className="sponsor-amount">Cost: {cat.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Details Placeholders */}
      <section className="payment-section section-padding">
        <div className="donation-container">
          <h2 className="section-title">Donation Options</h2>
          <p className="section-subtitle">Official payment gateway integrations are currently under review.</p>
          <div className="payment-placeholders-grid">
            <div className="payment-card glass-card">
              <div className="payment-icon">🏦</div>
              <h3>Bank Account Details</h3>
              <p className="status-badge">Coming Soon</p>
              <p className="placeholder-desc">Official bank account credentials and IFSC codes will be updated here shortly.</p>
            </div>
            
            <div className="payment-card glass-card">
              <div className="payment-icon">📱</div>
              <h3>UPI Transfers</h3>
              <p className="status-badge">Coming Soon</p>
              <p className="placeholder-desc">Direct mobile payments via GPay, PhonePe, and Paytm will be configured.</p>
            </div>

            <div className="payment-card glass-card">
              <div className="payment-icon">🔲</div>
              <h3>QR Code Scanner</h3>
              <p className="status-badge">Coming Soon</p>
              <p className="placeholder-desc">Scan-and-pay official QR Code images will be generated and uploaded.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donation;
