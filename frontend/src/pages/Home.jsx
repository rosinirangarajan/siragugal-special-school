import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

/* ── Asset Imports ────────────────────────────────────── */
import birdParkImg from '../assets/hero/bird-park.jpeg';
import emojiDayImg from '../assets/hero/emoji-day.jpeg';
import independenceDayImg from '../assets/hero/independence-day.jpeg';
import scienceExhibitionImg from '../assets/hero/science-exhibition.jpeg';
import schoolBuildingImg from '../assets/home/school-building.jpeg';

/* ── Data Arrays ──────────────────────────────────────── */
const heroImages = [
  { src: birdParkImg, alt: 'Students on a field trip to Bird Park' },
  { src: emojiDayImg, alt: 'Children celebrating Emoji Day' },
  { src: independenceDayImg, alt: 'Independence Day celebration at school' },
  { src: scienceExhibitionImg, alt: 'Students at the Science Exhibition' },
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

const lifeCards = [
  { src: birdParkImg, alt: 'Bird Park field trip', title: 'Bird Park', caption: 'Learning Beyond Classrooms' },
  { src: emojiDayImg, alt: 'Emoji Day celebration', title: 'Emoji Day', caption: 'Celebrating Expression' },
  { src: scienceExhibitionImg, alt: 'Science Exhibition', title: 'Science Exhibition', caption: 'Curiosity in Action' },
  { src: independenceDayImg, alt: 'Independence Day', title: 'Independence Day', caption: 'Growing Together' },
];

/* ── Intersection Observer Hook ───────────────────────── */
function useOnScreen(options = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, options);
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

/* ── Animated Counter ─────────────────────────────────── */
function useCountUp(target, duration = 1600, shouldStart = false) {
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

/* ── Fade-in Wrapper ──────────────────────────────────── */
const FadeIn = ({ children, className = '', delay = 0, as: Tag = 'div' }) => {
  const [ref, visible] = useOnScreen({ threshold: 0.15 });
  return (
    <Tag
      ref={ref}
      className={`fade-in ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

/* ── Stat Card ────────────────────────────────────────── */
const StatCard = ({ number, label, suffix, delay }) => {
  const [ref, visible] = useOnScreen({ threshold: 0.4 });
  const animatedValue = useCountUp(number, 1600, visible);

  return (
    <div ref={ref} className={`stat-card glass-card fade-in ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <h2 className="stat-number">{animatedValue}{suffix}</h2>
      <p className="stat-label">{label}</p>
    </div>
  );
};

/* ══════════════════════════════════════════════════════
   HOME PAGE
   ══════════════════════════════════════════════════════ */
const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page">

      {/* ── Hero ──────────────────────────────────────── */}
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
              <Link to="/donation" className="btn-primary">Donate Now</Link>
              <Link to="/about" className="btn-secondary">Learn More</Link>
            </div>
          </div>

          <div className="hero-slider-wrapper" aria-label="School activity photos">
            <div className="hero-image-slider">
              {heroImages.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className={`hero-slide-img ${i === activeSlide ? 'active' : ''}`}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              ))}
              <div className="hero-dots" role="tablist" aria-label="Slideshow controls">
                {heroImages.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === activeSlide}
                    className={`hero-dot ${i === activeSlide ? 'active' : ''}`}
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Show photo ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Statistics ────────────────────────────────── */}
      <section className="stats-section" aria-label="Key statistics">
        <div className="stats-container">
          {stats.map((s, i) => (
            <StatCard key={i} number={s.number} label={s.label} suffix={s.suffix} delay={i * 80} />
          ))}
        </div>
      </section>

      {/* ── Who We Are ────────────────────────────────── */}
      <section className="intro-preview section-padding" aria-label="About Siragugal">
        <div className="intro-container">
          <FadeIn className="intro-text-block">
            <span className="section-label">Who We Are</span>
            <h2 className="intro-title">Inclusive Education &amp; Care for Exceptional Minds</h2>
            <p>
              Under the parent organization <strong>PEACE TRUST</strong> (Promote
              Exceptionals And Create Evolution Trust), Siragugal has built branches
              across <strong>Thanjavur</strong>, <strong>Pattukottai</strong>, and
              our newly opened branch in <strong>Kumbakonam</strong>. We target
              cognitive, emotional, and social parameters using individual support
              programs.
            </p>
            <Link to="/about" className="btn-secondary" style={{ marginTop: '8px' }}>
              Read Our Story
            </Link>
          </FadeIn>

          <FadeIn className="intro-image-block" delay={150}>
            <img
              src={schoolBuildingImg}
              alt="Siragugal Special School campus"
              className="intro-school-img"
            />
          </FadeIn>
        </div>
      </section>

      {/* ── Facilities ────────────────────────────────── */}
      <section className="facilities-section section-padding" aria-label="Our facilities">
        <div className="container">
          <h2 className="section-title">Our Facilities</h2>
          <p className="section-subtitle">
            A nurturing and fully equipped infrastructure supporting developmental growth.
          </p>
          <div className="facilities-grid">
            {facilities.map((fac, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="facility-card glass-card">
                  <div className="facility-icon" aria-hidden="true">✓</div>
                  <h3>{fac.title}</h3>
                  <p>{fac.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Life at Siragugal ─────────────────────────── */}
      <section className="life-section section-padding" aria-label="Life at Siragugal">
        <div className="container">
          <FadeIn>
            <span className="section-label life-label">Gallery</span>
            <h2 className="section-title">Life at Siragugal</h2>
            <p className="section-subtitle">
              Every smile, every activity, and every milestone reflects a journey of growth, care, and belonging.
            </p>
          </FadeIn>

          <div className="life-grid">
            {lifeCards.map((card, i) => (
              <FadeIn key={i} className="life-card-wrapper" delay={i * 100}>
                <div className="life-card">
                  <img src={card.src} alt={card.alt} loading="lazy" />
                  <div className="life-card-overlay">
                    <h4>{card.title}</h4>
                    <p>{card.caption}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="life-cta" delay={200}>
            <Link to="/gallery" className="btn-secondary">View Full Gallery</Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Support / Donation Banner ─────────────────── */}
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
                style={{ background: '#FFFFFF', color: 'var(--color-accent)', boxShadow: 'none' }}
              >
                Donate Now
              </Link>
              <Link
                to="/contact"
                className="btn-secondary"
                style={{ color: '#FFFFFF', borderColor: 'var(--color-white)', background: 'transparent' }}
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