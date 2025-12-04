import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'Contact Us | PinaLab',
  description: 'Get in touch with PinaLab for sustainable fashion partnerships and inquiries.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-[#0a0b0f] via-[#121318] to-[#0a0b0f]">
      {/* Page Header */}
      <section className="contact-hero-section">
        <div className="container">
          <div className="contact-hero-content">
            <div className="contact-hero-badge">
              <span className="badge-icon">🤝</span>
              <span className="badge-text">Let's Connect</span>
            </div>
            <h1 className="contact-hero-title">
              Get In Touch
            </h1>
            <p className="contact-hero-subtitle">
              Partner with us for sustainable fashion solutions. We work with farmers, NGOs, government agencies, and the UN.
            </p>
            <div className="contact-hero-stats">
              <div className="hero-stat-item">
                <div className="hero-stat-number">5K+</div>
                <div className="hero-stat-label">Farmers</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-number">100%</div>
                <div className="hero-stat-label">Sustainable</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-number">24/7</div>
                <div className="hero-stat-label">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-16">
        <div className="container">
          <div className="contact-quick-info">
            <div className="quick-contact-card">
              <div className="quick-icon">🏭</div>
              <h3>Factory Location</h3>
              <p>PinaLab Processing Facility</p>
              <p>Sustainable Manufacturing District</p>
              <p className="text-emerald-400 font-semibold">Bangladesh</p>
            </div>

            <div className="quick-contact-card">
              <div className="quick-icon">📞</div>
              <h3>Phone</h3>
              <a href="tel:+880123456789" className="contact-link-large">
                +880 (123) 456-789
              </a>
              <p className="text-sm text-gray-500 mt-2">Available Mon-Fri, 9AM-6PM</p>
            </div>

            <div className="quick-contact-card">
              <div className="quick-icon">📧</div>
              <h3>Email</h3>
              <a href="mailto:contact@pinalab.com" className="contact-link-large">
                contact@pinalab.com
              </a>
              <a href="mailto:partnerships@pinalab.com" className="contact-link-large">
                partnerships@pinalab.com
              </a>
            </div>

            <div className="quick-contact-card">
              <div className="quick-icon">🌍</div>
              <h3>Social Media</h3>
              <div className="social-links-inline">
                <a href="#" className="social-link-btn">Facebook</a>
                <a href="#" className="social-link-btn">Instagram</a>
                <a href="#" className="social-link-btn">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-16">
        <div className="container">
          <div className="partnerships-box">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
              Our Partnerships
            </h2>
            <div className="partnerships-grid">
              <div className="partnership-item">
                <div className="partnership-icon">🇺🇳</div>
                <h4>United Nations</h4>
                <p>Providing shelter materials and supplies for refugee camps worldwide</p>
              </div>
              <div className="partnership-item">
                <div className="partnership-icon">🏛️</div>
                <h4>Government Agencies</h4>
                <p>Collaborating on sustainable development and agricultural programs</p>
              </div>
              <div className="partnership-item">
                <div className="partnership-icon">🌍</div>
                <h4>NGOs</h4>
                <p>Working with humanitarian organizations for social impact initiatives</p>
              </div>
              <div className="partnership-item">
                <div className="partnership-icon">👨‍🌾</div>
                <h4>5000+ Farmers</h4>
                <p>Empowering local farmers by purchasing pineapple leaf waste</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}


    </main>
  );
}
