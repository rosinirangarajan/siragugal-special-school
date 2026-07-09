import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const categories = ["All", "School", "Therapy", "Sports", "Celebrations", "Infrastructure", "Tours", "Events"];
  
  const galleryItems = [
    { id: 1, title: "Classroom Learning Session", category: "School", gradient: "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)" },
    { id: 2, title: "Occupational Therapy Activity", category: "Therapy", gradient: "linear-gradient(135deg, #A1C4FD 0%, #C2E9FB 100%)" },
    { id: 3, title: "Annual Day Dance Performance", category: "Celebrations", gradient: "linear-gradient(135deg, #F6D365 0%, #FDA085 100%)" },
    { id: 4, title: "Adapted Athletics Sprint", category: "Sports", gradient: "linear-gradient(135deg, #84FAB0 0%, #8FD3F4 100%)" },
    { id: 5, title: "Speech Therapy with Emoji Boards", category: "Therapy", gradient: "linear-gradient(135deg, #E0C3FC 0%, #8EC5FC 100%)" },
    { id: 6, title: "Historical Temple Visit", category: "Tours", gradient: "linear-gradient(135deg, #FEE140 0%, #FA709A 100%)" },
    { id: 7, title: "Autism Awareness March", category: "Events", gradient: "linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)" },
    { id: 8, title: "Sensory Multi-Playroom", category: "Infrastructure", gradient: "linear-gradient(135deg, #30CFD0 0%, #330867 100%)" },
    { id: 9, title: "Physiotherapy Posture Training", category: "Therapy", gradient: "linear-gradient(135deg, #5EE7DF 0%, #B490CA 100%)" }
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="gallery-page animate-fade-in">
      <section className="gallery-hero">
        <div className="container">
          <span className="badge">Memories</span>
          <h1>Media Gallery</h1>
          <p>A visual glimpse into the daily milestones, educational events, and physical rehabilitations at our school.</p>
        </div>
      </section>

      <section className="gallery-section-padding section-padding">
        <div className="gallery-container">
          {/* Filters */}
          <div className="gallery-filter-bar">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`gallery-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="gallery-masonry-grid">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="gallery-item-card glass-card"
                onClick={() => setSelectedImage(item)}
              >
                <div className="gallery-color-block" style={{ background: item.gradient }}>
                  <div className="zoom-indicator">🔎 Click to Expand</div>
                </div>
                <div className="gallery-item-details">
                  <span className="gallery-item-tag">{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-backdrop" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-lightbox-btn" onClick={() => setSelectedImage(null)}>&times;</button>
            <div className="lightbox-visual-block" style={{ background: selectedImage.gradient }}>
              <h3>{selectedImage.title}</h3>
              <p>Category: {selectedImage.category}</p>
            </div>
            <div className="lightbox-caption">
              <h4>{selectedImage.title}</h4>
              <p>Official media log for Siragugal Special School operations. (High-resolution source is currently being updated).</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
