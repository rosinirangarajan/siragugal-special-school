import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Hero images
import birdParkImg from '../assets/hero/bird-park.jpeg';
import emojiDayImg from '../assets/hero/emoji-day.jpeg';
import independenceDayImg from '../assets/hero/independence-day.jpeg';
import scienceExhibitionImg from '../assets/hero/science-exhibition.jpeg';

// School building
import schoolBuildingImg from '../assets/home/school-building.jpeg';

const heroImages = [
  { src: birdParkImg, alt: 'Students enjoying a trip to Bird Park' },
  { src: emojiDayImg, alt: 'Children celebrating Emoji Day with creative expressions' },
  { src: independenceDayImg, alt: 'Independence Day celebration at Siragugal' },
  { src: scienceExhibitionImg, alt: 'Students showcasing projects at Science Exhibition' },
];

const lifeAtSiragugalCards = [
  {
    src: birdParkImg,
    alt: 'Bird Park field trip',
    title: 'Bird Park',
    caption: 'Learning Beyond Classrooms',
  },
  {
    src: emojiDayImg,
    alt: 'Emoji Day celebration',
    title: 'Emoji Day',
    caption: 'Celebrating Expression',
  },
  {
    src: scienceExhibitionImg,
    alt: 'Science Exhibition display',
    title: 'Science Exhibition',
    caption: 'Curiosity in Action',
  },
  {
    src: independenceDayImg,
    alt: 'Independence Day event',
    title: 'Independence Day',
    caption: 'Growing Together',
  },
];

const stats = [
  { number: 2007, label: 'Year Established', suffix: '' },
  { number: 3, label: 'Special Schools', suffix: '' },
  { number: 3, label: 'Early Intervention Centres', suffix: '' },
  { number: 100, label: 'Dedicated Care', suffix: '%' },
];

const facilities = [
  { title: 'Special Classrooms', desc: 'Equipped with custom learning tools.' },
  { title: 'Therapy Rooms', desc: 'Private, safe environment for therapeutic sessions.' },
  { title: 'Vocational Units', desc: 'Workspaces to learn crafts and professional tasks.' },
  { title: 'Rehabilitation Centre', desc: 'Complete support infrastructure for physical needs.' },
];

/* ── Animated Counter Hook ───────────────────────────── */
function useCountUp(target, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    let start = 0;
    const increment = target / (duration / 16);
    let raf;

    const step = () => {
      start += increment;
      if (start >= target) {
        setCount(target);
      } else {
        setCount(Math.floor(start));
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, shouldStart]);

  return count;
}

/* ── Stat Card with Counter ──────────────────────────── */
const StatCard = ({ number, label, suffix }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animatedValue = useCountUp(number, 1800, visible);

  return (
    <div ref={ref} className="stat-card glass-card fade-in-element">
      <h2 className="stat-number">
        {animatedValue}
        {suffix}
      </h2>
      <p className="stat-label">{label}</p>
    </div>
  );
};

/* ── Fade-in on scroll wrapper ───────────────────────── */
const FadeInSection = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} fade-in-element ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* ══════════════════════════════════════════════════════
   HOME COMPONENT
   ══════════════════════════════════════════════════════ */
const Home = () => {
  /* ── Hero Image Slider ─────────────────────────────── */
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page">
      {/* ─── Hero Section ────────────────────────────── */}
      <section className="hero-section" aria-label="Welcome to Siragugal">
        <div className="hero-container">
          <div className="hero-content animate-slide-up">
            <span className="badge">Siragugal Special School</span>
            <h1 className="hero-title">
              Helping Every Child <br />
              <span className="text-highlight">Learn, Grow &amp; Shine</span>
            </h1>
            <p className="hero-description">
              Siragugal is a specialized initiative of the PEACE TRUST. Since 2007,
              we have dedicated our care to children with Autism, ADHD, Intellectual
              Disabilities, Down Syndrome, and Speech Delays in Tamil&nbsp;Nadu,&nbsp;India.
            </p>
            <div className="hero-ctas">
              <Link to="/donation" className="btn-primary">
                Donate Now
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>

          {/* Image Slider */}
          <div className="hero-slider-wrapper" aria-label="School activity slideshow">
            <div className="hero-image-slider">
              {heroImages.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  className={`hero-slide-img ${index === activeSlide ? 'active' : ''}`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              ))}
              {/* Pagination Dots */}
              <div className="hero-dots">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    className={`hero-dot ${index === activeSlide ? 'active' : ''}`}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Counter Section ───────────────────── */}
      <section className="stats-section" aria-label="Key statistics">
        <div className="stats-container">
          {stats.map((stat, idx) => (
            <StatCard key={idx} number={stat.number} label={stat.label} suffix={stat.suffix} />
          ))}
        </div>
      </section>

      {/* ─── Who We Are ──────────────────────────────── */}
      <section className="intro-preview section-padding" aria-label="About Siragugal">
        <div className="intro-container">
          <FadeInSection className="intro-text-block">
            <span className="section-label">Who We Are</span>
            <h2 className="intro-title">
              Inclusive Education &amp; Care for Exceptional Minds
            </h2>
            <p>
              Under the parent organization{' '}
              <strong>PEACE TRUST</strong> (Promote Exceptionals And Create
              Evolution Trust), Siragugal has built branches across{' '}
              <strong>Thanjavur</strong>, <strong>Pattukottai</strong>, and our
              newly opened branch in <strong>Kumbakonam</strong>. We target
              cognitive, emotional, and social parameters using individual
              support programs.
            </p>
            <Link to="/about" className="btn-secondary" style={{ marginTop: '8px' }}>
              Read Our Story
            </Link>
          </FadeInSection>

          <FadeInSection className="intro-image-block" delay={200}>
            <img
              src={schoolBuildingImg}
              alt="Siragugal Special School campus building"
              className="intro-school-img"
            />
          </FadeInSection>
        </div>
      </section>

      {/* ─── Facilities Section ──────────────────────── */}
      <section className="facilities-section section-padding" aria-label="Our facilities">
        <div className="container">
          <h2 className="section-title">Our Facilities</h2>
          <p className="section-subtitle">
            A nurturing and fully equipped infrastructure supporting
            developmental growth.
          </p>
          <div className="facilities-grid">
            {facilities.map((fac, idx) => (
              <FadeInSection key={idx} delay={idx * 100}>
                <div className="facility-card glass-card glass-card-hover">
                  <div className="facility-icon" aria-hidden="true">✓</div>
                  <h3>{fac.title}</h3>
                  <p>{fac.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Life at Siragugal ───────────────────────── */}
      <section className="life-section section-padding" aria-label="Life at Siragugal">
        <div className="container">
          <FadeInSection>
            <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>
              Gallery
            </span>
            <h2 className="section-title">Life at Siragugal</h2>
            <p className="section-subtitle">
              Every smile, every activity, and every milestone reflects a journey
              of growth, care, and belonging.
            </p>
          </FadeInSection>

          <div className="life-grid">
            {lifeAtSiragugalCards.map((card, idx) => (
              <FadeInSection key={idx} className="life-card" delay={idx * 120}>
                <div className="life-card-inner">
                  <img src={card.src} alt={card.alt} loading="lazy" />
                  <div className="life-card-overlay">
                    <h4>{card.title}</h4>
                    <p>{card.caption}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <div className="life-cta">
            <Link to="/gallery" className="btn-secondary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Donation Banner Section ─────────────────── */}
      <section className="cta-banner-section" aria-label="Support our mission">
        <div className="cta-banner-card">
          <div className="cta-banner-content">
            <h2>Support Our Mission</h2>
            <p>
              Every contribution, big or small, helps us provide special therapy,
              nutritious meals, and quality rehabilitation to children in need.
            </p>
            <div className="cta-actions">
              <Link
                to="/donation"
                className="btn-primary"
                style={{
                  background: '#FFFFFF',
                  color: 'var(--color-accent)',
                  boxShadow: 'none',
                }}
              >
                Donate Now
              </Link>
              <Link
                to="/contact"
                className="btn-secondary"
                style={{
                  color: '#FFFFFF',
                  borderColor: 'var(--color-white)',
                  background: 'transparent',
                }}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;