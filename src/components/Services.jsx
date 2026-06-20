import { Link } from 'react-router-dom';
import '../styles/Services.css';

const mainServices = [
  {
    tag: 'One-on-One',
    title: 'Personal Training',
    icon: '🎯',
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
    desc: 'Laser-focused sessions with certified coaches who design every workout around your body, your goals, and your timeline.',
    features: ['Custom workout plans', 'Progress tracking', 'Nutrition integration'],
  },
  {
    tag: 'Team Energy',
    title: 'Group Classes',
    icon: '🔥',
    img: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80',
    desc: 'From HIIT to yoga, our group classes harness collective energy to push you beyond what you thought possible.',
    features: ['HIIT & Strength', 'Cardio & Boxing', 'Yoga & Mobility'],
  },
  {
    tag: 'Fuel Your Gains',
    title: 'Nutrition Coaching',
    icon: '🥗',
    img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
    desc: 'Training is only half the equation. Our nutrition experts craft science-backed meal plans that accelerate your results.',
    features: ['Personalized meal plans', 'Macro coaching', 'Supplement guidance'],
  },
];

const programs = [
  { num: '01', icon: '💪', title: 'Strength & Power', desc: 'Progressive overload programs to build raw strength and lean muscle mass.' },
  { num: '02', icon: '🏃', title: 'Cardio Conditioning', desc: 'Interval and endurance training that shreds fat while preserving muscle.' },
  { num: '03', icon: '🧘', title: 'Mobility & Recovery', desc: 'Injury-prevention protocols and guided recovery for peak performance.' },
  { num: '04', icon: '🏆', title: 'Competition Prep', desc: 'Dedicated programs for athletes preparing for competitions and events.' },
];

export default function Services({ standalone = false }) {
  const cls = standalone ? 'services-page' : 'services-section';

  return (
    <section className={cls} id="services">
      <div className="container">
        <div className="services-intro">
          <div>
            <div className="section-eyebrow">What We Offer</div>
            <h2 className="section-title">
              Elite Services for<br /><span>Elite Results</span>
            </h2>
          </div>
          <div className="services-intro-cta">
            <p>
              Every service at Apex is built around one principle:
              no generic plans. Everything is tailored to you.
            </p>
            <Link to="/contact" className="btn-primary">Get Started</Link>
          </div>
        </div>

        {/* Main 3 service cards */}
        <div className="services-main-grid">
          {mainServices.map(s => (
            <div className="service-card" key={s.title}>
              <img
                src={s.img}
                alt={s.title}
                className="service-card-img"
                loading="lazy"
              />
              <div className="service-card-body">
                <div className="service-card-icon">{s.icon}</div>
                <div className="service-card-tag">{s.tag}</div>
                <div className="service-card-title">{s.title}</div>
                <div className="service-card-desc">{s.desc}</div>
                <div className="service-card-features">
                  {s.features.map(f => (
                    <div className="service-feature" key={f}>{f}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Speciality programs */}
        <div className="programs-label" style={{ marginTop: 60 }}>
          <div className="section-eyebrow">Specialty Programs</div>
        </div>
        <div className="programs-grid">
          {programs.map(p => (
            <div className="program-card" key={p.title}>
              <div className="program-number">{p.num}</div>
              <div className="program-icon">{p.icon}</div>
              <div className="program-title">{p.title}</div>
              <div className="program-desc">{p.desc}</div>
            </div>
          ))}
        </div>

        {/* CTA band */}
        <div className="pricing-band">
          <div className="pricing-band-text">
            <span>Memberships starting from</span>
            Plans for Every Goal &amp; Budget
          </div>
          <Link to="/contact" className="btn-white">View Pricing →</Link>
        </div>
      </div>
    </section>
  );
}
