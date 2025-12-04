// Testimonials Component
'use client';

import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span>💬</span>
            <span>Customer Reviews</span>
          </div>
          <h2 className="section-title">Loved by Thousands</h2>
          <p className="section-subtitle">See what our customers are saying about their experience</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="testimonial-card glass-card" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="quote-icon">"</div>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star-filled">★</span>
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>{testimonial.name.charAt(0)}</span>
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
