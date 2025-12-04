// Newsletter Signup Component
'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-background">
        <div className="gradient-orb orb-4"></div>
        <div className="gradient-orb orb-5"></div>
      </div>
      
      <div className="container">
        <div className="newsletter-card glass-card">
          <div className="newsletter-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M8 12L24 26L40 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="6" y="10" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="3"/>
            </svg>
          </div>
          <h2 className="newsletter-title">
            Join the <span className="gradient-text">Green</span> Revolution
          </h2>
          <p className="newsletter-subtitle">
            Subscribe for updates on sustainable fashion, new eco-friendly products, and our impact stories
          </p>
          
          <form className="newsletter-form modern-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary btn-submit">
                <span>Subscribe</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </form>
          
          {submitted && (
            <div className="success-message modern-success">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 10L8.5 13.5L15 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Thank you for subscribing!</span>
            </div>
          )}
          
          <p className="newsletter-footer">
            <span>🔒</span> We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
