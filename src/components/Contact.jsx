import { useState } from 'react';
import '../styles/Contact.css';

const details = [
  {
    icon: '📍',
    label: 'Our Location',
    value: 'P.N colony, 2n Line \nSrikakulam, Andhar Pradesh 532001',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: <a href="tel:+918012345678">+91 123456789</a>,
  },
  {
    icon: '✉️',
    label: 'Email',
    value: <a href="mailto:hello@apexfitness.in">apex@fitness.in</a>,
  },
  {
    icon: '🕐',
    label: 'Opening Hours',
    value: (
      <div className="hours-grid">
        <div className="hour-row"><span className="hour-day">Mon–Fri</span><span className="hour-time">5 AM – 11 PM</span></div>
        <div className="hour-row"><span className="hour-day">Saturday</span><span className="hour-time">6 AM – 10 PM</span></div>
        <div className="hour-row"><span className="hour-day">Sunday</span><span className="hour-time">7 AM – 8 PM</span></div>
        <div className="hour-row"><span className="hour-day">Holidays</span><span className="hour-time">8 AM – 6 PM</span></div>
      </div>
    ),
  },
];

const goals = ['Fat Loss', 'Muscle Gain', 'Strength Training', 'Cardio Conditioning', 'Yoga & Mobility', 'General Fitness', 'Competition Prep'];

export default function Contact({ standalone = false }) {
  const cls = standalone ? 'contact-page' : 'contact-section';
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', goal: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={cls} id="contact">
      <div className="container">
        <div className="contact-intro">
          <div className="section-eyebrow">Get In Touch</div>
          <h2 className="section-title">Start Your <span>Journey</span> Today</h2>
          <p className="section-subtitle">
            Whether you're ready to sign up or just have questions, our team is here to help you take the first step.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left: Info */}
          <div className="contact-info">
            {details.map(d => (
              <div className="contact-detail" key={d.label}>
                <div className="contact-detail-icon">{d.icon}</div>
                <div>
                  <div className="contact-detail-label">{d.label}</div>
                  <div className="contact-detail-value" style={{ whiteSpace: 'pre-line' }}>{d.value}</div>
                </div>
              </div>
            ))}

            <div className="contact-action-btns">
              <a
                href="https://wa.me/918012345678"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                💬 WhatsApp Us
              </a>
              <a href="tel:+91 123456789" className="btn-call">
                📞 Call Now
              </a>
            </div>

            {/* Map */}
            <div className="map-placeholder">
              <iframe
                title="Apex Fitness Location"
                src="https://www.google.com/maps/place/Flex+Health+Gym/@18.2941764,83.9022967,49m/data=!3m1!1e3!4m12!1m5!3m4!2zMTjCsDE3JzM4LjciTiA4M8KwNTQnMDkuMCJF!8m2!3d18.2940833!4d83.9025!3m5!1s0x3a3c150fce30939b:0x9371afa9647dd416!8m2!3d18.2940691!4d83.9025031!16s%2Fg%2F11cs3w7q6g?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon">✓</div>
                <h3>Message Received!</h3>
                <p>Our team will reach out within 24 hours. Welcome to the Apex family!</p>
                <button className="btn-outline" onClick={() => setSubmitted(false)} style={{ marginTop: 8 }}>
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <div className="form-title">Book a Free Consultation</div>
                <div className="form-subtitle">Tell us about your goals and we'll design a plan for you.</div>

                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Full Name</label>
                      <input
                        id="name" name="name" type="text"
                        className="form-input"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone</label>
                      <input
                        id="phone" name="phone" type="tel"
                        className="form-input"
                        placeholder="+91 99999 99999"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                      id="email" name="email" type="email"
                      className="form-input"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="goal">Your Primary Goal</label>
                    <select
                      id="goal" name="goal"
                      className="form-select"
                      value={formData.goal}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select your goal…</option>
                      {goals.map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Tell Us More (Optional)</label>
                    <textarea
                      id="message" name="message"
                      className="form-textarea"
                      placeholder="Current fitness level, any injuries, preferred schedule…"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="btn-primary form-submit">
                    Book Free Consultation →
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
