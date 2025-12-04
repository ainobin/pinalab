// Mission & Vision Component
'use client';

export default function MissionVision() {
  return (
    <section className="mission-vision-section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 mb-6 rounded-full bg-linear-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30">
            <span className="text-green-400 font-semibold text-sm">🌍 Our Purpose</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-linear-to-r from-white via-green-200 to-cyan-200 bg-clip-text text-transparent">
            Fashion From Nature,<br />For Nature
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Transforming agricultural waste into premium sustainable fashion while empowering communities
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="mission-vision-grid">
          {/* Mission Card */}
          <div className="mission-card">
            <div className="card-glow-effect"></div>
            <div className="card-content">
              <div className="icon-container mission-icon">
                <div className="icon-circle">
                  <span className="icon-emoji">🎯</span>
                </div>
                <div className="icon-pulse"></div>
              </div>
              
              <h3 className="card-title">Our Mission</h3>
              <p className="card-slogan">"Waste to Wonder"</p>
              
              <p className="card-description">
                To revolutionize the fashion industry by converting pineapple leaf waste into premium, 
                sustainable textiles that benefit farmers, protect the environment, and create beautiful products.
              </p>

              <div className="card-features">
                <div className="feature-item">
                  <span className="feature-icon">♻️</span>
                  <span className="feature-text">Zero Waste Production</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🤝</span>
                  <span className="feature-text">Empower 5000+ Farmers</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🌱</span>
                  <span className="feature-text">100% Vegan Materials</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="vision-card">
            <div className="card-glow-effect"></div>
            <div className="card-content">
              <div className="icon-container vision-icon">
                <div className="icon-circle">
                  <span className="icon-emoji">🚀</span>
                </div>
                <div className="icon-pulse"></div>
              </div>
              
              <h3 className="card-title">Our Vision</h3>
              <p className="card-slogan">"Green Future, Fashion Forward"</p>
              
              <p className="card-description">
                To become the global leader in sustainable fashion innovation, setting new standards for 
                eco-friendly production while creating a circular economy that benefits people and planet.
              </p>

              <div className="card-features">
                <div className="feature-item">
                  <span className="feature-icon">🌍</span>
                  <span className="feature-text">Global Impact</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🇺🇳</span>
                  <span className="feature-text">UN Partnership</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💚</span>
                  <span className="feature-text">Sustainable Future</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="impact-stats-container">
          <div className="stats-header">
            <h3 className="stats-title">Our Impact in Numbers</h3>
            <p className="stats-subtitle">Making a real difference every day</p>
          </div>

          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-icon">🍍</div>
              <div className="stat-number">10M+</div>
              <div className="stat-label">Pineapple Leaves Processed</div>
              <div className="stat-description">Turned waste into fashion</div>
            </div>

            <div className="stat-box">
              <div className="stat-icon">👨‍🌾</div>
              <div className="stat-number">5,000+</div>
              <div className="stat-label">Farmers Supported</div>
              <div className="stat-description">Earning fair income</div>
            </div>

            <div className="stat-box">
              <div className="stat-icon">🌳</div>
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Trees Saved</div>
              <div className="stat-description">Through sustainable practices</div>
            </div>

            <div className="stat-box">
              <div className="stat-icon">💧</div>
              <div className="stat-number">2M+</div>
              <div className="stat-label">Liters Water Saved</div>
              <div className="stat-description">Compared to traditional cotton</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <h3 className="values-title">Our Core Values</h3>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h4 className="value-name">Sustainability</h4>
              <p className="value-text">Every decision we make prioritizes environmental impact</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h4 className="value-name">Community</h4>
              <p className="value-text">Supporting local farmers and creating fair opportunities</p>
            </div>

            <div className="value-card">
              <div className="value-icon">💡</div>
              <h4 className="value-name">Innovation</h4>
              <p className="value-text">Pioneering new ways to create sustainable fashion</p>
            </div>

            <div className="value-card">
              <div className="value-icon">✨</div>
              <h4 className="value-name">Quality</h4>
              <p className="value-text">Premium products that don't compromise on style or ethics</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h4 className="value-name">Transparency</h4>
              <p className="value-text">Open about our processes and impact on the world</p>
            </div>

            <div className="value-card">
              <div className="value-icon">💚</div>
              <h4 className="value-name">Compassion</h4>
              <p className="value-text">100% vegan, cruelty-free, and kind to all living beings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
