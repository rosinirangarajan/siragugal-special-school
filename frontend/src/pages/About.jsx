import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const leadership = [
    {
      role: "Founder",
      name: "Mr. R. Krishnan",
      sub: "Retired Central Government Employee",
      tagline: "Founder of Siragugal Special School",
      desc: "Established the organization in January 2007 with the vision of providing education, rehabilitation and therapy services for children with special needs."
    },
    {
      role: "Managing Trustee & Director",
      name: "Mr. K. Saravana Kumar",
      sub: "B.Sc Psychology • M.A Psychology • M.Sc Psychotherapy",
      tagline: "Director of PEACE TRUST Operations",
      desc: "Leading PEACE TRUST with dedication towards inclusive education, therapy and holistic child development."
    }
  ];

  const timeline = [
    { year: "2007", title: "Founded Siragugal Special School", icon: "🏫" },
    { year: "2010", title: "Expanded Therapy Services", icon: "🩺" },
    { year: "2014", title: "Opened Multiple Intervention Classrooms", icon: "🚪" },
    { year: "2018", title: "Expanded Community Rehabilitation", icon: "🤝" },
    { year: "2022", title: "Strengthened Parent Support Programs", icon: "👨‍👩‍👧‍👦" },
    { year: "Present", title: "Continuing to Empower Special Children", icon: "✨" }
  ];

  const stats = [
    { number: "18+", label: "Years of Service", icon: "⏳" },
    { number: "500+", label: "Children Supported", icon: "👦" },
    { number: "3+", label: "Branches", icon: "🏢" },
    { number: "10+", label: "Professional Therapists", icon: "👩‍⚕️" },
    { number: "100+", label: "Families Benefited", icon: "❤️" },
    { number: "2007", label: "Established", icon: "📅" }
  ];

  const childrenWeSupport = [
    { label: "Autism Spectrum", icon: "🧩" },
    { label: "ADHD Support", icon: "⚡" },
    { label: "Intellectual Disability", icon: "🧠" },
    { label: "Down Syndrome", icon: "🧬" },
    { label: "Speech Delay", icon: "🗣️" },
    { label: "Developmental Delay", icon: "📈" },
    { label: "Learning Disability", icon: "📝" },
    { label: "Cerebral Palsy", icon: "♿" },
    { label: "Emotional Disturbance", icon: "🌱" }
  ];

  const coreValues = [
    { title: "Compassion", desc: "Serving children and families with extreme warmth and understanding.", icon: "💝" },
    { title: "Inclusive Education", desc: "Ensuring every individual receives equal opportunity to integrate with society.", icon: "📚" },
    { title: "Integrity", desc: "Conducting our organization with transparency, trust, and absolute honesty.", icon: "⚖️" },
    { title: "Respect", desc: "Honoring the unique abilities and dignity of every single child.", icon: "🤝" },
    { title: "Excellence", desc: "Delivering clinical-grade, verified therapeutic regimens for target developmental milestones.", icon: "⭐" },
    { title: "Community Support", desc: "Building local awareness, health camps, and guiding parents to government schemes.", icon: "🏡" }
  ];

  const whyChooseUs = [
    { title: "Experienced Professionals", desc: "Registered special educators, speech therapists, and occupational therapists.", icon: "🎓" },
    { title: "Individual Care Plans", desc: "Personalized IEP targets adapting to each child's cognitive absorption pace.", icon: "📋" },
    { title: "Modern Therapy", desc: "Combined play therapy, sensory integrations, and posture physiotherapies.", icon: "🔬" },
    { title: "Inclusive Education", desc: "Curriculums focusing on social skills, group activities, and community play.", icon: "🤝" },
    { title: "Family Support", desc: "Regular parent orientation camps, psychological counseling, and resources.", icon: "🏡" },
    { title: "Holistic Development", desc: "Targeting basic motor tasks, vocabulary, craft works, and life skill logic.", icon: "🌱" }
  ];

  const services = [
    { title: "Speech Therapy", desc: "Language development, vocabulary building, articulation correction, and AAC setups.", icon: "🗣️" },
    { title: "Occupational Therapy", desc: "Sensory integration, fine/gross motor tracking, writing coordination, and coordination.", icon: "✏️" },
    { title: "Physiotherapy", desc: "Muscle strengthening, posture alignment exercises, and balance training sessions.", icon: "♿" },
    { title: "Behaviour Therapy", desc: "ABA therapy focusing on reinforcement systems to structure behavioral boundaries.", icon: "🧠" },
    { title: "Special Education", desc: "Curriculums covering cognitive recognition, basic math, coloring, and social habits.", icon: "📚" },
    { title: "Vocational Training", desc: "Paper bag making, simple crafts, candle sculpting, and domestic skills.", icon: "💼" }
  ];

  const approach = [
    { step: "1", title: "Assessment", desc: "Initial clinical and psychological tracking by trustees.", icon: "🔍" },
    { step: "2", title: "Individual Learning Plan", desc: "Designing customized IEP targets and timelines.", icon: "📋" },
    { step: "3", title: "Therapy & Education", desc: "Structured sensory classrooms and daily rehabilitation.", icon: "🧠" },
    { step: "4", title: "Progress Monitoring", desc: "Milestone logging, parent check-ins, and adjustments.", icon: "📈" }
  ];

  const testimonials = [
    { name: "Parent of Suresh (Autism Spectrum)", rating: "★★★★★", feedback: "Siragugal has completely transformed my son. The speech therapies and caring educators have helped Suresh speak his first complete sentences." },
    { name: "Parent of Priyan (ADHD & Speech Delay)", rating: "★★★★★", feedback: "The occupational therapy sessions have improved Priyan's attention span and hand-eye coordination significantly. We are forever grateful." },
    { name: "Parent of Kavitha (Intellectual Disability)", rating: "★★★★★", feedback: "We felt lost until we found PEACE TRUST. The parent orientation sessions helped us support Kavitha's behavior at home as well." }
  ];

  return (
    <div className="about-page animate-fade-in">
      {/* Header Banner */}
      <section className="about-hero">
        <div className="about-hero-container">
          <span className="badge">About Us</span>
          <h1>About Siragugal Special School</h1>
          <p>Empowering children with special needs through education, therapy, rehabilitation and compassionate care since 2007.</p>
        </div>
      </section>

      {/* History & Backstory */}
      <section className="history-section section-padding-custom">
        <div className="about-container">
          <div className="history-text">
            <h2>Our History</h2>
            <div className="heading-divider"></div>
            <p>
              Founded in <strong>January 2007</strong> by <strong>Mr. R. Krishnan</strong> (a retired Central Government employee) and guided by Managing Trustee & Director <strong>Mr. K. Saravana Kumar</strong>, Siragugal Special School operates under the registered non-profit NGO <strong>PEACE TRUST</strong>.
            </p>
            <p>
              For over a decade, we have established multiple intervention classrooms and rehabilitation services across Tamil Nadu (including branches in Thanjavur, Pattukottai, and Kumbakonam) to cater to the critical developmental needs of special children.
            </p>
          </div>

          {/* Founder & Managing Trustee Section */}
          <div className="trustees-grid">
            {leadership.map((lead, idx) => (
              <div key={idx} className="trustee-profile-card glass-card">
                <div className="profile-avatar-circle">
                  <span>👤</span>
                </div>
                <span className="profile-role">{lead.role}</span>
                <h3>{lead.name}</h3>
                <p className="profile-sub">{lead.sub}</p>
                <p className="profile-tagline"><strong>{lead.tagline}</strong></p>
                <p className="profile-desc">{lead.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="timeline-section section-padding-custom">
        <div className="about-container">
          <h2 className="section-title">Our Journey Timeline</h2>
          <div className="heading-divider center"></div>
          <p className="section-subtitle">A legacy of progressive expansion and children's welfare milestones.</p>
          
          <div className="vertical-timeline-container">
            {timeline.map((item, idx) => (
              <div key={idx} className="timeline-node-wrapper">
                <div className="timeline-badge-year">{item.year}</div>
                <div className="timeline-card glass-card">
                  <span className="timeline-icon-spot">{item.icon}</span>
                  <h4>{item.title}</h4>
                </div>
                {idx < timeline.length - 1 && <div className="timeline-connector-line"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="about-stats-section section-padding-custom">
        <div className="about-container">
          <h2 className="section-title">Key Impact Statistics</h2>
          <div className="heading-divider center"></div>
          <div className="about-stats-grid">
            {stats.map((st, idx) => (
              <div key={idx} className="about-stat-card glass-card glass-card-hover">
                <span className="stat-card-icon">{st.icon}</span>
                <h3>{st.number}</h3>
                <p>{st.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Children We Support */}
      <section className="children-support-section section-padding-custom">
        <div className="about-container">
          <h2 className="section-title">Children We Support</h2>
          <div className="heading-divider center"></div>
          <p className="section-subtitle">Individual rehabilitation plans mapped to support distinct neurodivergent conditions.</p>
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

      {/* Core Values */}
      <section className="values-section section-padding-custom">
        <div className="about-container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="heading-divider center"></div>
          <p className="section-subtitle">The cultural foundations of care guiding Siragugal daily.</p>
          <div className="values-grid-new">
            {coreValues.map((val, idx) => (
              <div key={idx} className="value-card-new glass-card glass-card-hover">
                <span className="value-card-icon">{val.icon}</span>
                <h4>{val.title}</h4>
                <p>{val.desc}</p>
              </div>
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

      {/* Services Grid */}
      <section className="services-section section-padding-custom">
        <div className="about-container">
          <h2 className="section-title">Therapy & Educational Services</h2>
          <div className="heading-divider center"></div>
          <div className="services-grid">
            {services.map((ser, idx) => (
              <div key={idx} className="service-card-new glass-card glass-card-hover">
                <span className="service-icon-box">{ser.icon}</span>
                <h4>{ser.title}</h4>
                <p>{ser.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Workflow */}
      <section className="approach-section section-padding-custom">
        <div className="about-container">
          <h2 className="section-title">Our Approach</h2>
          <div className="heading-divider center"></div>
          <div className="approach-steps-grid">
            {approach.map((ap, idx) => (
              <div key={idx} className="approach-node-card glass-card">
                <div className="approach-badge-step">{ap.step}</div>
                <span className="approach-node-icon">{ap.icon}</span>
                <h4>{ap.title}</h4>
                <p>{ap.desc}</p>
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
          <p className="section-subtitle">Our structured chain of care ensures transparent management and individual attention.</p>
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

      {/* Photo Gallery Preview */}
      <section className="gallery-preview-section section-padding-custom">
        <div className="about-container">
          <h2 className="section-title">Life at Siragugal</h2>
          <div className="heading-divider center"></div>
          <div className="gallery-preview-grid">
            <div className="gallery-pic-placeholder glass-card">
              <span>Classroom Interactions</span>
            </div>
            <div className="gallery-pic-placeholder glass-card">
              <span>Therapeutic Exercises</span>
            </div>
            <div className="gallery-pic-placeholder glass-card">
              <span>Outdoor Celebrations</span>
            </div>
            <div className="gallery-pic-placeholder glass-card">
              <span>Student Craft Works</span>
            </div>
          </div>
          <div className="gallery-preview-cta">
            <Link to="/gallery" className="btn-secondary">View Full Gallery &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section section-padding-custom">
        <div className="about-container">
          <h2 className="section-title">Parent Feedbacks</h2>
          <div className="heading-divider center"></div>
          <div className="testimonials-grid">
            {testimonials.map((test, idx) => (
              <div key={idx} className="testimonial-card glass-card">
                <div className="testimonial-stars">{test.rating}</div>
                <p className="testimonial-feedback">"{test.feedback}"</p>
                <span className="testimonial-parent-name">{test.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-full-width">
        <div className="about-cta-card">
          <h2>Help Us Build Brighter Futures</h2>
          <p>Every child deserves the opportunity to learn, grow and thrive.</p>
          <div className="about-cta-btn-group">
            <Link to="/donation" className="btn-primary" style={{ background: '#FFFFFF', color: 'var(--color-accent)', boxShadow: 'none' }}>Donate Now</Link>
            <a href="#volunteer" className="btn-secondary" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.4)', background: 'transparent' }}>Become a Volunteer</a>
            <Link to="/contact" className="btn-secondary" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.4)', background: 'transparent' }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;