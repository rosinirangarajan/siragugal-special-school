import React from 'react';
import './Staff.css';

const Staff = () => {
  const leadership = [
    {
      name: "Mr. K. Saravana Kumar",
      role: "Managing Trustee & Director",
      quals: ["B.Sc Psychology", "M.A Psychology", "M.Sc Psychotherapy and Counselling"],
      desc: "Providing psychiatric guidance and executive administration since 2007."
    },
    {
      name: "Ms. K. Revathy",
      role: "Trustee",
      quals: ["Bachelor of Occupational Therapy (BOT)", "M.A Psychology", "B.Ed Special Education", "Diploma in NGO Management"],
      desc: "Supervising clinical motor therapy regimens and special educators integration."
    }
  ];

  const categories = [
    { title: "Therapy & Special Education Team", role: "Specialized Staff", count: 8 },
    { title: "Caregivers & Support Staff", role: "Daily Care Assistants", count: 12 }
  ];

  const teamRoles = [
    "Special Educators", "Speech Therapist", "Occupational Therapist",
    "Physiotherapist", "ABA Therapist", "Rehabilitation Therapist"
  ];

  return (
    <div className="staff-page animate-fade-in">
      <section className="staff-hero">
        <div className="container">
          <span className="badge">Our People</span>
          <h1>Our Rehabilitation Team</h1>
          <p>Meet the clinical practitioners, educators, and compassionate therapists who dedicate their lives to nurturing our children.</p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section section-padding">
        <div className="staff-container">
          <h2 className="section-title">Leadership & Trustees</h2>
          <p className="section-subtitle">Guiding Siragugal with specialized clinical knowledge and administrative excellence.</p>
          <div className="leadership-grid">
            {leadership.map((lead, idx) => (
              <div key={idx} className="leader-card glass-card">
                <div className="leader-avatar-placeholder">👤</div>
                <div className="leader-info">
                  <h3>{lead.name}</h3>
                  <span className="leader-role">{lead.role}</span>
                  <div className="leader-quals">
                    {lead.quals.map((q, i) => (
                      <span key={i} className="qual-badge">{q}</span>
                    ))}
                  </div>
                  <p className="leader-desc">{lead.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Capabilities */}
      <section className="team-capabilities section-padding">
        <div className="staff-container">
          <h2 className="section-title">Multidisciplinary Practitioners</h2>
          <p className="section-subtitle">Our team covers all key medical, cognitive, and physical therapy disciplines.</p>
          <div className="roles-grid">
            {teamRoles.map((role, idx) => (
              <div key={idx} className="role-card glass-card">
                <div className="role-icon">✦</div>
                <h3>{role}s</h3>
                <p>Fully qualified therapists executing customized child development plans daily.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Caregivers section */}
      <section className="caregivers-section section-padding">
        <div className="staff-container">
          <div className="caregivers-banner glass-card">
            <h3>Support Staff & Caregivers</h3>
            <p>Our dedicated caregivers are on-site to assist children with basic toilet training, motor help, feeding, and classroom behaviors, ensuring a warm, family-like environment.</p>
            <div className="banner-details">
              <span><strong>Total Special Caregivers:</strong> 8 Staff Members</span>
              <span><strong>Student-to-Staff Ratio:</strong> 3:1</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staff;
