// Hero Section Component
'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🍍</span>
            <span>Sustainable Fashion Innovation</span>
          </div>
          <h1 className="hero-title">
            Fashion From <span className="gradient-text">Nature</span>, For Nature
          </h1>
          <p className="hero-subtitle">
            Transform waste into wonder. We convert pineapple leaves into premium vegan leather and sustainable textiles. Eco-friendly fashion that empowers farmers and protects our planet.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary btn-animated">
              <span>Shop Sustainable</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn btn-outline">
              <span>Our Story</span>
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Vegan</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Farmers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Zero</div>
              <div className="stat-label">Waste</div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-card">
            <div className="card-glow"></div>
            <div className="image-content">
              <Image
                src="/images/hero.jpeg"
                alt="PinaLab factory workers processing pineapple leaves into sustainable fiber"
                width={700}
                height={500}
                className="hero-actual-image"
                priority
              />
              <div className="image-overlay">
                <div className="overlay-badge">
                  <span className="badge-icon">🏭</span>
                  <span>Our In-House Factory</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
