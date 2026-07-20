import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email format is invalid";
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[-+() ]/g, ''))) {
      tempErrors.phone = "Provide a valid 10-digit number";
    }
    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      console.log("Contact Form Submitted Successfully: ", formData);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const faqs = [
    { q: "What is the age limit for admission?", a: "We admit children from age 2 (for early intervention) up to age 18 (for special school curriculum and vocational training)." },
    { q: "How are individual therapy plans created?", a: "Managing Trustee Mr. Saravana Kumar and clinical therapist Ms. Revathy conduct a detailed initial assessment of the child's cognitive, motor, and speech parameters, followed by target milestones scheduling." },
    { q: "Do you provide transport facility?", a: "Yes, we support specialized transportation for children commuting in and around Thanjavur. Specific route details will be updated." },
    { q: "Are parents involved in the therapy sessions?", a: "Yes, family-centered care is our core value. We conduct parent counseling, orientation, and training sessions so rehabilitation continues consistently at home." }
  ];

  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className="contact-page animate-fade-in">
      <section className="contact-hero">
        <div className="container">
          <span className="badge">Get in Touch</span>
          <h1>Contact Us</h1>
          <p>Have questions about admissions, therapies, or how you can sponsor our school? Drop us a message.</p>
        </div>
      </section>

      {/* Info & Form */}
      <section className="contact-section-padding section-padding">
        <div className="contact-container grid-2">
          {/* Left Info Column */}
          <div className="contact-info-column">
            <h2>Official Head Office</h2>
            <p className="contact-intro">
              Feel free to visit our office or reach out using the placeholders below.
            </p>
            
            <div className="contact-cards-stack">
              <div className="info-card glass-card">
                <div className="info-icon">📍</div>
                <div className="info-details">
                  <h4>Address</h4>
                  <address>
                    PEACE TRUST<br />
                    No.23, Sivaji Nagar,<br />
                    Membalam, Thanjavur,<br />
                    Tamil Nadu, India.
                  </address>
                </div>
              </div>

              <div className="info-card glass-card">
                <div className="info-icon">📞</div>
                <div className="info-details">
                  <h4>Phone Contacts</h4>
                  <p className="placeholder-txt">Coming Soon</p>
                </div>
              </div>

              <div className="info-card glass-card">
                <div className="info-icon">✉</div>
                <div className="info-details">
                  <h4>Email Addresses</h4>
                  <p className="placeholder-txt">Coming Soon</p>
                </div>
              </div>

              <div className="info-card glass-card">
                <div className="info-icon">⏰</div>
                <div className="info-details">
                  <h4>Working Hours</h4>
                  <p className="placeholder-txt">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="contact-form-column glass-card">
            <h2>Send us a Message</h2>
            <p>Our office coordinator will review and direct your request to the therapists.</p>

            {submitted && (
              <div className="alert-success">
                ✓ Thank you! Your message was submitted successfully. We will get back to you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-txt">{errors.name}</span>}
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-txt">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                    placeholder="10-digit number"
                  />
                  {errors.phone && <span className="error-txt">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <span className="error-txt">{errors.message}</span>}
              </div>

              <button type="submit" className="btn-primary form-submit-btn">Send Message &rarr;</button>
            </form>
          </div>
        </div>
      </section>

      {/* Redesigned Locate Our Center Map & Information Section */}
      <section className="map-section section-padding-custom">
        <div className="contact-container">
          <h2 className="section-title">Locate Our Center</h2>
          <div className="heading-divider center"></div>
          <p className="section-subtitle">Find us at Sivaji Nagar, Membalam, Thanjavur.</p>
          
          {/* Live Interactive Map */}
          <div className="map-frame-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2312678685117!2d79.12846071480074!3d10.780509492318859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab8bf5306b201%3A0xa38d7350b310c43c!2sSpecial%20School-Siragugal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="480" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Siragugal Special School Location Map"
            ></iframe>
          </div>

          {/* Location Information Cards */}
          <div className="location-info-grid">
            {/* Card 1: Address */}
            <div className="location-card-custom glass-card">
              <div className="location-card-header-custom">
                <span className="location-card-icon">📍</span>
                <h3>Address</h3>
              </div>
              <div className="location-card-body-custom">
                <p className="bold-text">PEACE TRUST – Siragugal Special School</p>
                <p>No.23, Shivaji Nagar Main Road</p>
                <p>Membalam</p>
                <p>Thanjavur – 613001</p>
                <p>Tamil Nadu</p>
                <p>India</p>
              </div>
            </div>

            {/* Card 2: Contact */}
            <div className="location-card-custom glass-card">
              <div className="location-card-header-custom">
                <span className="location-card-icon">📞</span>
                <h3>Contact</h3>
              </div>
              <div className="location-card-body-custom fields-stack">
                <div className="field-block">
                  <span className="field-label-custom">Phone:</span>
                  <span className="field-line-custom">____________________</span>
                </div>
                <div className="field-block">
                  <span className="field-label-custom">Email:</span>
                  <span className="field-line-custom">____________________</span>
                </div>
              </div>
            </div>

            {/* Card 3: Working Hours */}
            <div className="location-card-custom glass-card">
              <div className="location-card-header-custom">
                <span className="location-card-icon">🕒</span>
                <h3>Working Hours</h3>
              </div>
              <div className="location-card-body-custom hours-stack">
                <div className="hour-row">
                  <span className="hour-day">Monday – Friday</span>
                  <span className="hour-time">9:00 AM – 5:00 PM</span>
                </div>
                <div className="hour-row">
                  <span className="hour-day">Saturday</span>
                  <span className="hour-time">9:00 AM – 1:00 PM</span>
                </div>
                <div className="hour-row">
                  <span className="hour-day">Sunday</span>
                  <span className="hour-time closed-text">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Get Directions Action Button */}
          <div className="directions-cta-wrapper">
            <a 
              href="https://www.google.com/maps/dir//Special+School-Siragugal,+23,+Shivaji+Nagar+Main+Rd,+Membalam,+Thanjavur,+Tamil+Nadu+613001/@10.8050023,78.6682389,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3baab8bf5306b201:0xa38d7350b310c43c!2m2!1d79.1306494!2d10.7805095?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D" 
              className="btn-primary directions-btn"
              target="_blank" 
              rel="noopener noreferrer"
            >
              📍 Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section-padding">
        <div className="contact-container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item glass-card">
                <button className="faq-question-btn" onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}>
                  <span>{faq.q}</span>
                  <span>{activeFaq === idx ? '−' : '+'}</span>
                </button>
                <div className={`faq-answer-panel ${activeFaq === idx ? 'open' : ''}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;