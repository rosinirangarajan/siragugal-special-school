import React from 'react';
import './Courses.css';

const Courses = () => {
  const programs = [
    {
      title: "Special Education",
      desc: "Tailored academic paths emphasizing sensory integrations, language, and social structures rather than rigid exam-oriented models.",
      benefits: ["Individualized Education Plan (IEP)", "Cognitive skill progress", "Structured social habits"],
      age: "6 to 18 Years"
    },
    {
      title: "Early Intervention (Autism & ID)",
      desc: "Crucial developmental tracking and play therapy targeted for early identified spectrum disorders and intellectual deficits.",
      benefits: ["Early milestones mapping", "Sensory integration start", "Parent coping strategies"],
      age: "2 to 6 Years"
    },
    {
      title: "Speech & Language Therapy",
      desc: "Speech correction, sound articulation, and alternative augmentative communication (AAC) mapping to help child speak or communicate.",
      benefits: ["Sound articulation correction", "Confidence in expressions", "Better communicative comprehension"],
      age: "2 Years & Above"
    },
    {
      title: "Occupational Therapy (OT)",
      desc: "Sensory integration therapy focusing on motor coordination, balance, and spatial orientation to make kids physically self-reliant.",
      benefits: ["Improves handwriting & grasp", "Refines hand-eye coordination", "Regulates sensory overloads"],
      age: "3 Years & Above"
    },
    {
      title: "Physiotherapy",
      desc: "Dedicated clinical exercise systems helping child correct posture, build muscle strength, and enhance independent mobility.",
      benefits: ["Postural realignment", "Muscle tone management", "Enhanced physical coordination"],
      age: "Any Age Group"
    },
    {
      title: "Applied Behaviour Analysis (ABA)",
      desc: "Scientific behavioral modification technique focusing on positive reinforcements to remove problematic tantrums or self-harm habits.",
      benefits: ["Reduces behavior outbursts", "Boosts positive responses", "Enhances classroom attention span"],
      age: "3 to 12 Years"
    },
    {
      title: "Vocational & Life Skill Training",
      desc: "Equipping adult children with professional craftsmanship (paper bags, simple candle making, embroidery) and home survival tasks.",
      benefits: ["Fosters economic independence", "Improves household functionality", "Provides professional identity"],
      age: "14 Years & Above"
    },
    {
      title: "Parent Orientation & Counselling",
      desc: "Supporting mothers and fathers with home care strategies, behavioral guidance systems, and mental health counseling support.",
      benefits: ["Reduces parent burnout", "Creates consistent home care", "Increases family unity"],
      age: "For Families & Guardians"
    }
  ];

  return (
    <div className="courses-page animate-fade-in">
      <section className="courses-hero">
        <div className="container">
          <span className="badge">Curriculums</span>
          <h1>Our Programs & Therapies</h1>
          <p>Holistic developmental pathways combining special classroom teaching with target occupational and speech rehabilitation.</p>
        </div>
      </section>

      <section className="courses-grid-section section-padding">
        <div className="courses-container">
          <div className="courses-grid">
            {programs.map((prog, idx) => (
              <div key={idx} className="program-card glass-card glass-card-hover">
                <div className="program-header">
                  <h3>{prog.title}</h3>
                  <span className="age-tag">{prog.age}</span>
                </div>
                <div className="program-body">
                  <p className="program-desc">{prog.desc}</p>
                  <div className="benefits-section">
                    <h4>Expected Goals / Benefits:</h4>
                    <ul>
                      {prog.benefits.map((benefit, i) => (
                        <li key={i}>✓ {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
