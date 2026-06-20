import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const stats = [
  { number: '12', suffix: '+', label: 'Years' },
  { number: '1.8K', suffix: '', label: 'Members' },
  { number: '10', suffix: '', label: 'Certified Trainers' },
  { number: '90', suffix: '%', label: 'Success Rate' },
];

const highlights = [
  { icon: '🏋️', text: 'Expert Trainers' },
  { icon: '⚡', text: 'Modern Equipment' },
  { icon: '📊', text: 'Personalized Plans' },
  { icon: '🍛', text: 'Personalized diet' },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-gradient" />
      <div className="hero-accent-line" />

      <div className="hero-content">
        <div className="container">
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Premium Gym &amp; Fitness Center
            </div>

            <h1 className="hero-headline">
              Transform
              <span className="hero-headline-accent">Your</span>
              Body
            </h1>

            <p className="hero-sub">
              At Apex Fitness, we build <strong>champions</strong>. Whether you're starting fresh
              or pushing past limits, our expert coaches and world-class facilities are here
              to take you to the top.
            </p>

            <div className="hero-ctas">
              <Link to="/contact" className="btn-primary">
                Join Now &nbsp;→
              </Link>
              <Link to="/about" className="btn-outline">
                Our Story
              </Link>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-stats-card">
              <div className="hero-stats-card-label">Performance Stats</div>
              <div className="hero-stats-grid">
                {stats.map(s => (
                  <div className="hero-stat" key={s.label}>
                    <div className="hero-stat-number">
                      {s.number}<span>{s.suffix}</span>
                    </div>
                    <div className="hero-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="hero-highlights">
                {highlights.map(h => (
                  <div className="hero-highlight" key={h.text}>
                    <div className="highlight-icon">{h.icon}</div>
                    <div className="highlight-text">{h.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  );
}
