import React from 'react';
import './About.css';

const About = () => {
  const coreValues = [
    { title: "Compassion", desc: "Serving children and families with extreme warmth and understanding." },
    { title: "Inclusiveness", desc: "Ensuring every individual receives equal opportunity to integrate with society." },
    { title: "Respect", desc: "Honoring the unique abilities and dignity of every single child." },
    { title: "Innovation", desc: "Employing progressive psychologies, technologies and therapies." },
    { title: "Empowerment", desc: "Building core skills so children can grow up to be self-sufficient." },
    { title: "Integrity", desc: "Conducting our organization with transparency, trust, and absolute honesty." }
  ];

  const disorders = [
    "Autism Spectrum Disorder", "ADHD (Attention Deficit)", "Intellectual Disability",
    "Down Syndrome", "Cerebral Palsy", "Speech & Language Delay",
    "Learning Disabilities", "Developmental Delay", "Emotional Disturbance"
  ];

  return (
    <div className="about-page animate-fade-in">
      {/* Header Banner */}
      <section className="about-hero">
        <div className="about-hero-container">
          <span className="badge">Our Journey</span>
          <h1>About Siragugal Special School</h1>
          <p>An initiative of PEACE TRUST promoting exceptions and creating evolution since January 2007.</p>
        </div>
      </section>

      {/* History & Backstory */}
      <section className="history-section section-padding">
        <div className="about-container">
          <div className="history-text">
            <h2>Our History</h2>
            <p>
              Founded in <strong>January 2007</strong> by <strong>Mr. R. Krishnan</strong> (a retired Central Government employee) and guided by Managing Trustee & Director <strong>Mr. K. Saravana Kumar</strong>, Siragugal Special School operates under the registered non-profit NGO <strong>PEACE TRUST</strong>.
            </p>
            <p>
              For over a decade, we have established multiple intervention classrooms and rehabilitation services across Tamil Nadu (including branches in Thanjavur, Pattukottai, and Kumbakonam) to cater to the critical developmental needs of special children.
            </p>
            <div className="disorder-grid-wrapper">
              <h4>Children We Support</h4>
              <div className="disorder-tags">
                {disorders.map((dis, idx) => (
                  <span key={idx} className="disorder-tag">{dis}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section section-padding">
        <div className="about-container grid-2">
          <div className="mv-card glass-card">
            <div className="mv-icon">✦</div>
            <h3>Our Mission</h3>
            <p>To provide quality rehabilitation, therapy, education, skill development and community support for children with special needs through multidisciplinary care and inclusive education.</p>
          </div>
          <div className="mv-card glass-card">
            <div className="mv-icon">👁</div>
            <h3>Our Vision</h3>
            <p>To create an inclusive society where every child with special needs receives equal opportunities to learn, develop confidence, become independent and live with dignity.</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section section-padding">
        <div className="about-container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">The foundation of everything we do at Siragugal.</p>
          <div className="values-grid">
            {coreValues.map((val, idx) => (
              <div key={idx} className="value-card glass-card">
                <h4>{val.title}</h4>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="structure-section section-padding">
        <div className="about-container">
          <h2 className="section-title">Organizational Structure</h2>
          <p className="section-subtitle">Our structured chain of care ensures transparent management and individual attention.</p>
          <div className="structure-flow">
            <div className="flow-node highlight">Director</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-node highlight">Project Director</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-node">Office Incharge</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-row-node">
              <div className="flow-sub-node">Speech Therapist</div>
              <div className="flow-sub-node">Occupational Therapist</div>
              <div className="flow-sub-node">Physiotherapist</div>
              <div className="flow-sub-node">Special Educators</div>
            </div>
            <div className="flow-arrow">↓</div>
            <div className="flow-node">Caregivers</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-node highlight-parents">Parents</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
