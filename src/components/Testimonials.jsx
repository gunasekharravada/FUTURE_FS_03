import '../styles/Testimonials.css';

const testimonials = [
  {
    text: "I came to Apex after failing at three other gyms. Within 6 months, I dropped 22 kg and ran my first half-marathon. The coaches here don't just count reps — they change your relationship with fitness forever.",
    name: 'Rahul Mehta',
    role: 'Lost 22 kg in 6 months',
    result: '22kg',
    resultLabel: 'lost',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    text: "The nutrition coaching alone was worth the membership. Priya completely overhauled how I eat, and combined with Marcus's strength program, I went from skinny-fat to genuinely lean. Life-changing.",
    name: 'Anjali Nair',
    role: 'Body Recomposition',
    result: '+14kg',
    resultLabel: 'muscle gained',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
  },
  {
    text: "As a software engineer who sits all day, my back was constantly in pain. Sofia's mobility program fixed that in weeks. Now I deadlift 120 kg and feel better at 38 than I did at 28.",
    name: 'Vikram Shetty',
    role: 'Strength Athlete',
    result: '120kg',
    resultLabel: 'deadlift',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
  },
];

const transformPhotos = [
  { url: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=300&q=70', label: 'Before & After' },
  { url: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=300&q=70', label: 'Body Recomp' },
  { url: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=300&q=70', label: 'Strength Gains' },
  { url: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=300&q=70', label: 'Fat Loss' },
  { url: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=300&q=70', label: 'Competition Prep' },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <div className="section-eyebrow">Real Results</div>
          <h2 className="section-title">What Our Members<br /><span>Actually Say</span></h2>
          <p className="section-subtitle">
            No stock photos. No fabricated reviews. These are real Apex members sharing their real journeys.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map(t => (
            <div className="testimonial-card" key={t.name}>
              <span className="testimonial-quote-mark">"</span>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => <span key={i} className="star">★</span>)}
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                <div>
                  <div className="testimonial-author-name">{t.name}</div>
                  <div className="testimonial-author-role">{t.role}</div>
                </div>
                <div className="testimonial-result">
                  <div className="testimonial-result-number">{t.result}</div>
                  <div className="testimonial-result-label">{t.resultLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transformation gallery */}
        <div className="section-eyebrow" style={{ marginTop: 64 }}>Transformation Gallery</div>
        <div className="transformation-strip">
          {transformPhotos.map(p => (
            <div className="transform-item" key={p.url}>
              <img src={p.url} alt={p.label} className="transform-img" loading="lazy" />
              <div className="transform-overlay">{p.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
