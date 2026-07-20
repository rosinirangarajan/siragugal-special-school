import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const leadership = [
    {
      role: "Founder",
      name: "Mr. R. Krishnan",
      desc: "Founder of Siragugal Special School. Established the organization in 2007 with the vision of providing education, therapy and rehabilitation for children with special needs."
    },
    {
      role: "Managing Trustee",
      name: "Mr. K. Saravana Kumar",
      desc: "Leading PEACE TRUST with dedication towards inclusive education and holistic child development."
    }
  ];

  const childrenWeSupport = [
    { label: "Autism", icon: "🧩" },
    { label: "ADHD", icon: "⚡" },
    { label: "Intellectual Disability", icon: "🧠" },
    { label: "Down Syndrome", icon: "🧬" },
    { label: "Speech Delay", icon: "🗣️" },
    { label: "Developmental Delay", icon: "📈" },
    { label: "Learning Disability", icon: "📝" },
    { label: "Cerebral Palsy", icon: "♿" },
    { label: "Emotional Disturbance", icon: "🌱" }
  ];

  const whyChooseUs = [
    { title: "Experienced Staff", desc: "Qualified therapists and certified special educators working together.", icon: "👩‍⚕️" },
    { title: "Personalized Care", desc: "Individualized Education Plans (IEP) adapting to each child's speed.", icon: "📋" },
    { title: "Inclusive Education", desc: "Focusing on social integrations, behavior, and group interactions.", icon: "📚" },
    { title: "Therapy Support", desc: "Speech, Occupational, and Physiotherapies integrated on-site.", icon: "🩺" },
    { title: "Safe Environment", desc: "Sensory-friendly, secure, and encouraging layout designs.", icon: "🛡️" },
    { title: "Holistic Development", desc: "Targeting vocabulary, physical coordination, crafts, and life skills.", icon: "🌱" }
  ];

  return (
    <div className="about-page animate-fade-in">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-container">
          <span className="badge">About Us</span>
          <h1>About Siragugal Special School</h1>
          <p>Empowering children with special needs through education, therapy, rehabilitation and compassionate care since 2007.</p>
        </div>
      </section>

      {/* Our Story & History */}
      <section className="history-section section-padding-custom">
        <div className="about-container">
          <div className="history-text">
            <h2>Our Story</h2>
            <div className="heading-divider"></div>
            <p>
              Siragugal Special School was <strong>Established in January 2007</strong> by <strong>Founder Mr. R. Krishnan</strong> (a retired Central Government employee) with the goal of creating inclusive rehabilitation opportunities.
            </p>
            <p>
              Managed under the parent NGO <strong>PEACE TRUST</strong>, the school is guided by <strong>Managing Trustee Mr. K. Saravana Kumar</strong>, directing clinical, behavioral, and motor therapies for children in Thanjavur, Pattukottai, and Kumbakonam.
            </p>
          </div>

          {/* Founder & Managing Trustee */}
          <div className="trustees-grid">
            {leadership.map((lead, idx) => (
              <div key={idx} className="trustee-card glass-card">
                <div className="profile-avatar-circle">👤</div>
                <span className="profile-role">{lead.role}</span>
                <h3>{lead.name}</h3>
                <p className="profile-desc">{lead.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section section-padding-custom">
        <div className="about-container grid-2">
          <div className="mv-card glass-card glass-card-hover">
            <div className="mv-icon-large">✦</div>
            <h3>Our Mission</h3>
            <p>To provide quality rehabilitation, therapy, education, skill development and community support for children with special needs through multidisciplinary care and inclusive education.</p>
          </div>
          <div className="mv-card glass-card glass-card-hover">
            <div className="mv-icon-large">👁</div>
            <h3>Our Vision</h3>
            <p>To create an inclusive society where every child with special needs receives equal opportunities to learn, develop confidence, become independent and live with dignity.</p>
          </div>
        </div>
      </section>

      {/* Children We Support */}
      <section className="children-support-section section-padding-custom">
        <div className="about-container">
          <h2 className="section-title">Children We Support</h2>
          <div className="heading-divider center"></div>
          <div className="support-tags-wrapper">
            {childrenWeSupport.map((tag, idx) => (
              <span key={idx} className="support-tag-chip">
                <span className="tag-chip-icon">{tag.icon}</span>
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Siragugal */}
      <section className="why-section section-padding-custom">
        <div className="about-container">
          <h2 className="section-title">Why Choose Siragugal</h2>
          <div className="heading-divider center"></div>
          <div className="why-grid">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="why-card glass-card glass-card-hover">
                <span className="why-card-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="structure-section section-padding-custom">
        <div className="about-container">
          <h2 className="section-title">Organizational Structure</h2>
          <div className="heading-divider center"></div>
          <div className="structure-flow">
            <div className="flow-node highlight">👑 Director</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-node highlight">📋 Project Director</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-node">🏢 Office Incharge</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-row-node">
              <div className="flow-sub-node">🗣️ Speech Therapist</div>
              <div className="flow-sub-node">✏️ Occupational Therapist</div>
              <div className="flow-sub-node">♿ Physiotherapist</div>
              <div className="flow-sub-node">📚 Special Educators</div>
            </div>
            <div className="flow-arrow">↓</div>
            <div className="flow-node">🤝 Caregivers</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-node highlight-parents">👨‍👩‍👧‍👦 Parents</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta-full-width">
        <div className="about-cta-card">
          <h2>Help Every Child Reach Their Potential</h2>
          <p>Join us in empowering children with special needs through education, therapy and community support.</p>
          <div className="about-cta-btn-group">
            <Link to="/donation" className="btn-primary" style={{ background: '#FFFFFF', color: 'var(--color-accent)', boxShadow: 'none' }}>Donate Now</Link>
            <Link to="/contact" className="btn-secondary" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.4)', background: 'transparent' }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;