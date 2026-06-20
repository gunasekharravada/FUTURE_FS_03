import { useState } from 'react';
import '../styles/FAQ.css';

const faqs = [
  {
    q: 'Do I need to be fit to join?',
    a: 'Absolutely not. Apex Fitness is for everyone — beginners, intermediates, and advanced athletes. Our trainers specialise in meeting you exactly where you are and building from there.',
  },
  {
    q: 'How does personal training work?',
    a: "You'll be matched with a certified coach based on your goals. Your first session is an assessment: we measure your baselines, discuss your lifestyle, and start building your personalised program.",
  },
  {
    q: 'Can I try before committing to a membership?',
    a: 'Yes! We offer a free 3-day trial pass for all new members. Book yours through the contact form or give us a call.',
  },
  {
    q: 'Do you offer nutrition coaching as an add-on?',
    a: 'Nutrition coaching can be added to any membership plan. It includes meal planning, macro tracking guidance, and bi-weekly check-ins with our certified nutritionist.',
  },
  {
    q: 'What equipment is available?',
    a: 'We have 8,000 sq ft of equipment including free weights up to 80 kg, cable machines, functional training rigs, turf track, cardio zone, and a dedicated group class studio.',
  },
  {
    q: 'Is parking available?',
    a: 'Yes, we have 40 dedicated parking slots in our basement. Two-wheelers can use the covered stand adjacent to the main entrance.',
  },
];

const perks = [
  'Weekly workout tips & routines',
  'Exclusive member offers',
  'Nutrition recipes & guides',
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const [email, setEmail] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);

  const toggle = i => setOpen(open === i ? null : i);

  const handleNewsletter = e => {
    e.preventDefault();
    if (email) setNewsletterSent(true);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-eyebrow">Common Questions</div>
        <h2 className="section-title">Got Questions?<br /><span>We've Got Answers.</span></h2>

        <div className="faq-layout">
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className={`faq-item${open === i ? ' open' : ''}`} key={i}>
                <div className="faq-question" onClick={() => toggle(i)}>
                  <span className="faq-q-text">{f.q}</span>
                  <span className="faq-toggle">+</span>
                </div>
                <div className="faq-answer">
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="newsletter-card">
            <div className="newsletter-title">Stay in the Loop</div>
            <div className="newsletter-subtitle">
              Join 2,400+ members who get weekly fitness insights, exclusive offers, and workout ideas straight to their inbox.
            </div>

            {newsletterSent ? (
              <div className="newsletter-success">
                <span>✓</span>
                <span>You're subscribed! Welcome to the Apex community.</span>
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={handleNewsletter}>
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                  Subscribe Free →
                </button>
              </form>
            )}

            <div className="newsletter-perks">
              {perks.map(p => (
                <div className="newsletter-perk" key={p}>
                  <span className="perk-check">✓</span>
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
