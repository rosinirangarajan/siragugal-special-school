import React, { useState } from 'react';
import './Activities.css';

import annualDay from "../assets/images/annual-day.png";
import autismAwareness from "../assets/images/autism-awareness.png";
import educationalTour from "../assets/images/educational-tour.png";
import emojiDay from "../assets/images/emoji-day.png";
import independenceDay from "../assets/images/independence-day.png";
import childrensDay from "../assets/images/childrens-day.png";
import christmas from "../assets/images/Christmas.png";
import diwali from "../assets/images/diwali.png";
import halloween from "../assets/images/Halloween.png";
import pongal from "../assets/images/pongal.png";
import scienceExpo from "../assets/images/Science-expo.png";
import sportsDay from "../assets/images/sports-day.png";
import teachersDay from "../assets/images/teachers-day.png";
import vijayaDashami from "../assets/images/vijaya-dashami.png";

const Activities = () => {
  const allActivities = [
    {
      title: "Annual Day Celebration",
      date: "Annually in March",
      desc: "A vibrant showcase of our children's performance, talents, and cultural dances on stage.",
      category: "Celebrations",
      image: annualDay,
    },
    {
      title: "Autism Awareness Day",
      date: "April 2",
      desc: "A blue-themed community walk and parent interaction workshops to build inclusion awareness.",
      category: "Awareness",
      image: autismAwareness,
    },
    {
      title: "Educational Tour",
      date: "Bi-annually",
      desc: "Taking our students to local parks, museums, and historical temples in Thanjavur to build real-world experience.",
      category: "Tours",
      image: educationalTour,
    },
    {
      title: "World Emoji Day",
      date: "July 17",
      desc: "Activity focused on emotional expressions using emoji boards to assist speech delayed children.",
      category: "Educational",
      image: emojiDay,
    },
    {
      title: "Independence Day",
      date: "August 15",
      desc: "Flag hoisting, patriotism speech therapy activities, and distribution of healthy sweets.",
      category: "Celebrations",
      image: independenceDay
    },
    {
      title: "Teachers Day",
      date: "September 5",
      desc: "Honoring our dedicated educators, therapists, and caregivers who make daily milestones possible.",
      category: "Celebrations",
      image: teachersDay
    },
    {
      title: "Sports Day",
      date: "Annually in November",
      desc: "Friendly athletics and modified developmental sports to encourage coordination and physical confidence.",
      category: "Sports",
      image: sportsDay
    },
    {
      title: "Vijaya Dashami Celebration",
      date: "October",
      desc: "Special admissions and prayer programs to welcome new students and start new therapeutic sessions.",
      category: "Celebrations",
      image: vijayaDashami

    },
    {
      title: "Diwali Celebration",
      date: "November",
      desc: "Eco-friendly celebrations with light modeling, simple clay arts, and decorative sweets sharing.",
      category: "Celebrations",
      image:  diwali
    },
    {
      title: "Halloween Celebration",
      date: "October 31",
      desc: "Creative dress-up and sensory play with shapes and colors for cognitive development.",
      category: "Celebrations",
      image: halloween
    },
    {
      title: "Children's Day",
      date: "November 14",
      desc: "Special fun games, puppet shows, and customized gift boxes for each child.",
      category: "Celebrations",
      image: childrensDay
    },
    {
      title: "Christmas Celebration",
      date: "December 25",
      desc: "Carols, gift distribution by Santa Claus, and sensory-friendly visual decors.",
      category: "Celebrations",
      image: christmas
    },
    {
      title: "Pongal Celebration",
      date: "January 14",
      desc: "Traditional sweet rice preparation, folklore integration, and social skill building.",
      category: "Celebrations",
      image:  pongal
    },
    {
      title: "Science Expo",
      date: "Occasional",
      desc: "Simple sensory science experiments conducted by children with developmental supervision.",
      category: "Educational",
      image: scienceExpo
    },
  ];

  
  const categories = ["All", "Celebrations", "Awareness", "Tours", "Educational", "Sports"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredActivities = activeCategory === "All"
    ? allActivities
    : allActivities.filter(act => act.category === activeCategory);

  return (
    <div className="activities-page animate-fade-in">
      <section className="activities-hero">
        <div className="container">
          <span className="badge">Engagements</span>
          <h1>Our Activities & Events</h1>
          <p>
            Fostering social engagement, cognitive growth, and community
            integration through celebrations and learning tours.
          </p>
        </div>
      </section>

      <section className="activities-list-section section-padding">
        <div className="activities-container">
          {/* Category Filter */}
          <div className="filter-bar">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="activities-grid">
            {filteredActivities.map((act, idx) => (
              <div
                key={idx}
                className="activity-card glass-card glass-card-hover"
              >
                <div className="activity-image-placeholder">
                  <span className="category-tag">{act.category}</span>
                  <img
                    src={act.image}
                    alt={act.title}
                    className="activity-image"
                    onClick={() => setSelectedImage(act)}
                  />
                </div>
                <div className="activity-card-body">
                  <span className="activity-date">{act.date}</span>
                  <h3>{act.title}</h3>
                  <p>{act.desc}</p>
                </div>
              </div>
            ))}
          </div>
                  </div>
      </section>

      {selectedImage && (
        <div
          className="image-modal"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="modal-image"
            />

            <h3>{selectedImage.title}</h3>
          </div>
        </div>
      )}

    </div>
  );
};

export default Activities;
