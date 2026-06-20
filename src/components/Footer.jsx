import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
];

const services = [
  'Personal Training',
  'Group Classes',
  'Nutrition Coaching',
  'Strength & Power',
  'Cardio Conditioning',
  'Competition Prep',
];

const legals = [
  'Privacy Policy',
  'Terms of Service',
  'Membership Terms',
  'Refund Policy',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="navbar-logo" style={{ display: 'inline-flex' }}>
              <div className="logo-icon">A</div>
              <div className="logo-text">
                <span className="logo-name">APEX</span>
                <span className="logo-tagline">Fitness</span>
              </div>
            </Link>
            <p className="footer-brand-desc">
              Andhara Pradesh's premier performance gym. We combine elite coaching, science-backed programming, and world-class facilities to help you reach your peak.
            </p>
            <div className="footer-socials">
              {['ig', 'fb', 'tw', 'yt', 'in'].map(s => (
                <a key={s} href="#" className="footer-social" aria-label={s}>
                  {s.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="footer-col-title">Quick Links</div>
            <div className="footer-links">
              {quickLinks.map(l => (
                <Link key={l.to} to={l.to} className="footer-link">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="footer-col-title">Services</div>
            <div className="footer-links">
              {services.map(s => (
                <Link key={s} to="/services" className="footer-link">{s}</Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <div className="footer-col-title">Legal</div>
            <div className="footer-links">
              {legals.map(l => (
                <a key={l} href="#" className="footer-link">{l}</a>
              ))}
            </div>

            <div style={{ marginTop: 28 }}>
              <div className="footer-col-title">Contact</div>
              <div className="footer-links">
                <a href="tel:+918012945678" className="footer-link">+91 80 1294 5678</a>
                <a href="mailto:hello@apexfitness.in" className="footer-link">apex@fitness.in</a>
                <span className="footer-link" style={{ cursor: 'default' }}>Srikakulam, Andhara Pradesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {year} <span>Apex Fitness</span>. All rights reserved. Designed for champions.
          </div>
          <div className="footer-badge">
            <span className="footer-badge-dot" />
            Open Now · 5 AM – 11 PM
          </div>
        </div>
      </div>
    </footer>
  );
}
