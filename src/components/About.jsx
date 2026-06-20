import { Link } from 'react-router-dom';
import '../styles/About.css';

const stats = [
  { number: '12+', label: 'Years of Excellence' },
  { number: '1,800+', label: 'Active Members' },
  { number: '10', label: 'Certified Trainers' },
  { number: '90%', label: 'Member Satisfaction' },
];

const values = [
  { icon: '🏆', label: 'Excellence', text: 'We hold ourselves and our members to the highest standard in fitness and professionalism.' },
  { icon: '🤝', label: 'Community', text: 'Every member is family. We celebrate wins together and support each other through challenges.' },
  { icon: '🔬', label: 'Science-Led', text: 'Every program is built on proven exercise science, not trends or guesswork.' },
];

const trainers = [
  {
    name: 'Marcus Reid',
    role: 'Head Strength Coach',
    img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80',
  },
  {
    name: 'Sofia Alvarez',
    role: 'Yoga & Mobility',
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80',
  },
  {
    name: 'Jordan Blake',
    role: 'HIIT & Cardio Specialist',
    img: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&q=80',
  },
  {
    name: 'Priya Sharma',
    role: 'Nutrition Coach',
    img: 'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=400&q=80',
  },
];

export default function About({ standalone = false }) {
  const cls = standalone ? 'about-page' : 'about-section';

  return (
    <section className={cls} id="about">
      <div className="container">
        {/* Intro split */}
        <div className="about-intro">
          <div className="about-image-block">
            <div className="about-image-stripe" />
            <img
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80"
              alt="Apex Fitness gym interior"
              className="about-main-img"
              loading="lazy"
            />
            <div className="about-image-badge">
              <div className="about-image-badge-number">12+</div>
              <div className="about-image-badge-label">Years Strong</div>
            </div>
          </div>

          <div className="about-text">
            <div className="section-eyebrow">Our Story</div>
            <h2 className="section-title">Built for Those<br /><span>Who Want More</span></h2>

            <p className="about-body">
              Apex Fitness was founded in 2012 with a radical idea: every person who walks through our doors deserves <strong>elite-level coaching</strong>, regardless of where they're starting from.
            </p>
            <p className="about-body">
              Over the past 12 years, we've helped thousands of members reshape not just their bodies, but their mindsets, energy, and confidence. We don't run a gym — we run a performance center.
            </p>

            <div className="about-values">
              {values.map(v => (
                <div className="about-value" key={v.label}>
                  <div className="about-value-icon">{v.icon}</div>
                  <div className="about-value-text">
                    <strong>{v.label}</strong>
                    <span>{v.text}</span>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/contact" className="btn-primary">Join Our Community</Link>
          </div>
        </div>

        {/* Stats */}
        <div className="about-stats-row">
          {stats.map(s => (
            <div className="about-stat-box" key={s.label}>
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Trainers */}
        <div className="trainers-header">
          <div>
            <div className="section-eyebrow">The Team</div>
            <h2 className="section-title">Meet Your <span>Coaches</span></h2>
          </div>
          <Link to="/contact" className="btn-outline">View All Trainers</Link>
        </div>

        <div className="trainers-grid">
          {trainers.map(t => (
            <div className="trainer-card" key={t.name}>
              <img
                src={t.img}
                alt={t.name}
                className="trainer-img"
                loading="lazy"
              />
              <div className="trainer-info">
                <div className="trainer-name">{t.name}</div>
                <div className="trainer-role">{t.role}</div>
                <div className="trainer-socials">
                  <div className="trainer-social-btn">in</div>
                  <div className="trainer-social-btn">ig</div>
                  <div className="trainer-social-btn">tw</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
