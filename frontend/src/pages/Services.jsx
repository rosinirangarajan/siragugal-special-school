import React, { useState } from "react";
import {
  BookOpen,
  Mic,
  HandHeart,
  Dumbbell,
  Brain,
  Briefcase,
  Users,
  ArrowRight,
} from "lucide-react";
import './Services.css';

const Courses = () => {
  const programs = [
    {
      id: 1,
      title: "Special Education",
      icon: BookOpen,

      shortDescription:
        "Personalized learning programs designed to improve academic, communication, and life skills.",

      highlights: [
        "Individual Learning Plans",
        "Cognitive Development",
        "Social Skill Building",
      ],

      details: {
        description:
          "Special Education at PEACE Trust is designed to meet the unique learning needs of children with autism and developmental disabilities. Each child receives personalized attention through structured teaching methods, visual learning techniques, and activity-based instruction.",

        benefits: [
          "Individual Learning Plans",
          "Improved Communication",
          "Academic Development",
          "Greater Independence",
        ],

        suitableFor: [
          "Autism Spectrum Disorder",
          "Intellectual Disabilities",
          "Developmental Delays",
        ],

        sessionType: [
          "Individual Sessions",
          "Small Group Sessions",
          "Activity-Based Learning",
        ],

        ageGroup: "6 to 18 Years",

        approach:
          "Every child learns differently. Our educators provide a supportive environment that encourages academic, social, and emotional growth.",
      },
    },
    {
      id: 2,
      title: "Early Intervention",
      icon: Brain,

      shortDescription:
        "Early support programs designed to enhance communication, sensory development, and learning during a child's crucial developmental years.",

      highlights: [
        "Developmental Milestone Tracking",
        "Sensory Integration Activities",
        "Parent Guidance & Support",
      ],

      details: {
        description:
          "Early Intervention at PEACE Trust focuses on identifying and addressing developmental challenges at the earliest stage. Through structured play, sensory activities, and individualized therapy, we help children build communication, cognitive, social, and motor skills during their most important years of development.",

        benefits: [
          "Promotes Early Learning",
          "Improves Communication Skills",
          "Enhances Social Interaction",
          "Supports Overall Development",
        ],

        suitableFor: [
          "Children with Autism Spectrum Disorder (ASD)",
          "Children with Developmental Delays",
          "Children with Intellectual Disabilities",
        ],

        sessionType: [
          "Individual Therapy Sessions",
          "Play-Based Learning",
          "Parent-Assisted Activities",
        ],

        ageGroup: "2 to 6 Years",

        approach:
          "Our therapists believe that early intervention creates the strongest foundation for lifelong learning. Every program is tailored to each child's developmental needs while actively involving parents throughout the journey.",
      },
    },
    {
      id: 3,
      title: "Speech & Language Therapy",
      icon: Mic,

      shortDescription:
        "Helping children develop effective communication, language understanding, and speech clarity through individualized therapy.",

      highlights: [
        "Speech Clarity & Articulation",
        "Language Development",
        "Alternative Communication Support",
      ],

      details: {
        description:
          "Speech and Language Therapy at PEACE Trust helps children improve their ability to communicate effectively. Our therapists work on speech sounds, language comprehension, expressive communication, and alternative communication methods to help every child express their thoughts and needs with confidence.",

        benefits: [
          "Improves Speech Clarity",
          "Develops Language Skills",
          "Builds Communication Confidence",
          "Enhances Social Interaction",
        ],

        suitableFor: [
          "Children with Speech Delays",
          "Children with Autism Spectrum Disorder (ASD)",
          "Children with Language Disorders",
        ],

        sessionType: [
          "Individual Therapy Sessions",
          "Language Development Activities",
          "AAC (Alternative & Augmentative Communication) Support",
        ],

        ageGroup: "2 Years & Above",

        approach:
          "We believe every child deserves a voice. Our therapy sessions are personalized to help children communicate confidently using speech, gestures, visual supports, or assistive communication methods.",
      },
    },
    {
      id: 4,
      title: "Occupational Therapy",
      icon: HandHeart,

      shortDescription:
        "Supporting children in developing fine motor skills, sensory processing, and independence in everyday activities.",

      highlights: [
        "Sensory Integration",
        "Fine Motor Skill Development",
        "Daily Living Skills",
      ],

      details: {
        description:
          "Occupational Therapy at PEACE Trust helps children develop the physical, sensory, and cognitive skills needed for everyday life. Through engaging activities and personalized therapy, children improve their ability to participate independently at home, school, and in the community.",

        benefits: [
          "Improves Fine Motor Skills",
          "Enhances Hand-Eye Coordination",
          "Supports Sensory Regulation",
          "Promotes Daily Independence",
        ],

        suitableFor: [
          "Children with Autism Spectrum Disorder (ASD)",
          "Children with Sensory Processing Challenges",
          "Children with Developmental Delays",
        ],

        sessionType: [
          "Individual Therapy Sessions",
          "Sensory Integration Activities",
          "Functional Skill Training",
        ],

        ageGroup: "3 Years & Above",

        approach:
          "Our occupational therapists design engaging, child-centered activities that strengthen essential life skills while building confidence and independence in everyday tasks.",
      },
    },
    {
      id: 5,
      title: "Physiotherapy",
      icon: Dumbbell,

      shortDescription:
        "Enhancing strength, posture, balance, and mobility through personalized physical therapy programs.",

      highlights: [
        "Posture & Balance Training",
        "Muscle Strength Development",
        "Mobility & Coordination",
      ],

      details: {
        description:
          "Physiotherapy at PEACE Trust focuses on improving a child's physical abilities through structured exercises and therapeutic activities. Our therapists help children develop better balance, coordination, posture, and muscle strength, enabling them to participate more confidently in everyday activities.",

        benefits: [
          "Improves Posture & Balance",
          "Builds Muscle Strength",
          "Enhances Coordination",
          "Increases Independent Mobility",
        ],

        suitableFor: [
          "Children with Physical Disabilities",
          "Children with Developmental Delays",
          "Children with Neuromuscular Conditions",
        ],

        sessionType: [
          "Individual Therapy Sessions",
          "Exercise-Based Rehabilitation",
          "Functional Movement Training",
        ],

        ageGroup: "All Age Groups",

        approach:
          "Every child has unique physical abilities. Our physiotherapists create personalized treatment plans that encourage movement, build confidence, and help children achieve greater independence in their daily lives.",
      },
    },
    {
      id: 6,
      title: "Behaviour Therapy (ABA)",
      icon: Brain,

      shortDescription:
        "Encouraging positive behaviours, communication, and social skills through evidence-based therapeutic interventions.",

      highlights: [
        "Positive Behaviour Support",
        "Communication Development",
        "Social Skill Enhancement",
      ],

      details: {
        description:
          "Behaviour Therapy at PEACE Trust uses evidence-based strategies to help children develop positive behaviours, improve communication, and strengthen social interactions. Our therapists create individualized intervention plans that encourage meaningful learning while reducing challenging behaviours in a supportive environment.",

        benefits: [
          "Encourages Positive Behaviour",
          "Improves Attention & Learning",
          "Develops Social Skills",
          "Enhances Daily Independence",
        ],

        suitableFor: [
          "Children with Autism Spectrum Disorder (ASD)",
          "Children with Behavioural Challenges",
          "Children with Developmental Delays",
        ],

        sessionType: [
          "One-to-One Therapy Sessions",
          "Behaviour Intervention Programs",
          "Parent Guidance Sessions",
        ],

        ageGroup: "3 Years & Above",

        approach:
          "We focus on understanding every child's strengths and challenges. Our therapists work closely with families to create positive learning experiences that build confidence, independence, and lifelong skills.",
      },
    },

    {
      id: 7,
      title: "Vocational Training",
      icon: Briefcase,

      shortDescription:
        "Empowering individuals with practical vocational and life skills that promote independence, confidence, and future opportunities.",

      highlights: [
        "Life Skill Development",
        "Vocational Skill Training",
        "Independent Living Support",
      ],

      details: {
        description:
          "Vocational Training at PEACE Trust prepares adolescents and young adults with developmental disabilities for greater independence. Through practical skill-based learning, students develop vocational abilities, daily living skills, and work habits that help them participate confidently in their homes, communities, and future workplaces.",

        benefits: [
          "Builds Self-Confidence",
          "Develops Practical Work Skills",
          "Encourages Independent Living",
          "Improves Social Responsibility",
        ],

        suitableFor: [
          "Adolescents with Autism",
          "Young Adults with Intellectual Disabilities",
          "Individuals Preparing for Independent Living",
        ],

        sessionType: [
          "Hands-on Skill Training",
          "Group Learning Activities",
          "Community-Based Practice",
        ],

        ageGroup: "14 Years & Above",

        approach:
          "Our vocational programs focus on each individual's abilities and interests. By combining practical training with life skills education, we help learners become more independent, confident, and prepared for meaningful participation in society.",
      },
    },

    {
      id: 8,
      title: "Parent Counselling",
      icon: Users,

      shortDescription:
        "Empowering parents with guidance, emotional support, and practical strategies to help their child thrive at home and beyond.",

      highlights: [
        "Family Guidance",
        "Home-Based Support Strategies",
        "Emotional Well-being",
      ],

      details: {
        description:
          "Parent Counselling at PEACE Trust is designed to support families throughout their child's developmental journey. Our counsellors provide practical guidance, emotional support, and individualized strategies that help parents understand their child's needs, strengthen family relationships, and confidently continue therapeutic practices at home.",

        benefits: [
          "Builds Parent Confidence",
          "Strengthens Family Relationships",
          "Promotes Consistent Home Support",
          "Reduces Caregiver Stress",
        ],

        suitableFor: [
          "Parents of Children with Autism",
          "Families of Children with Developmental Delays",
          "Caregivers Seeking Professional Guidance",
        ],

        sessionType: [
          "Individual Counselling Sessions",
          "Family Counselling",
          "Parent Training Workshops",
        ],

        ageGroup: "Parents & Caregivers",

        approach:
          "We believe parents are the most important partners in every child's development. By providing compassionate guidance and practical support, we help families build confidence and create a nurturing environment where children can reach their full potential.",
      },
    },

  ];

  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="courses-page animate-fade-in">
      <section className="courses-hero">
        <div className="container">
          <span className="badge">Our Expertise</span>
          <h1>Our Services</h1>
          <p>
            Supporting every child's development through specialized therapies,
            education, and family-centered care.
          </p>
        </div>
      </section>

      <section className="courses-grid-section section-padding">
        <div className="courses-container">
          <div className="courses-grid">
            {programs.map((prog, idx) => (
              <div
                key={idx}
                className="program-card glass-card glass-card-hover"
              >
                <>
                  <div className="service-icon-wrapper">
                    <prog.icon className="service-icon" />
                  </div>

                  <h3 className="service-title">{prog.title}</h3>

                  <p className="service-description">{prog.shortDescription}</p>

                  <ul className="service-highlights">
                    {prog.highlights.map((item, index) => (
                      <li key={index}>✓ {item}</li>
                    ))}
                  </ul>

                  <button
                    className="learn-more-btn"
                    onClick={() => setSelectedService(prog)}
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </button>
                </>
              </div>
            ))}
          </div>
        </div>
            </section>

      {selectedService && (
        <div
          className="service-modal"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="service-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedService(null)}
            >
              ✕
            </button>

            <div className="service-modal-header">
              <selectedService.icon
                className="service-modal-icon"
              />

              <h2>{selectedService.title}</h2>
            </div>

            <p className="service-modal-description">
              {selectedService.details.description}
            </p>

            <div className="modal-section">
              <h3>Key Benefits</h3>

              <ul>
                {selectedService.details.benefits.map((item, index) => (
                  <li key={index}>✓ {item}</li>
                ))}
              </ul>
            </div>

            <div className="modal-section">
              <h3>Suitable For</h3>

              <ul>
                {selectedService.details.suitableFor.map((item, index) => (
                  <li key={index}>✓ {item}</li>
                ))}
              </ul>
            </div>

            <div className="modal-section">
              <h3>Session Type</h3>

              <ul>
                {selectedService.details.sessionType.map((item, index) => (
                  <li key={index}>✓ {item}</li>
                ))}
              </ul>
            </div>

            <div className="service-info-box">
              <strong>Age Group:</strong>{" "}
              {selectedService.details.ageGroup}
            </div>

            <div className="service-approach">
              <h3>Our Approach</h3>

              <p>{selectedService.details.approach}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Courses;
