// Contact Section Component
'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Partner with us for sustainable fashion solutions</p>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            
            <div className="contact-item">
              <h4>🏭 Factory Location</h4>
              <p>PinaLab Processing Facility<br />Sustainable Manufacturing District<br />Bangladesh</p>
            </div>

            <div className="contact-item">
              <h4>📞 Phone</h4>
              <p><a href="tel:+880123456789">+880 (123) 456-789</a></p>
            </div>

            <div className="contact-item">
              <h4>📧 Email</h4>
              <p><a href="mailto:contact@pinalab.com">contact@pinalab.com</a><br />
              <a href="mailto:partnerships@pinalab.com">partnerships@pinalab.com</a></p>
            </div>

            <div className="contact-item">
              <h4>🤝 Our Partners</h4>
              <p>🇺🇳 United Nations (Refugee Shelters)<br />🏛️ Government Agencies<br />🌍 NGOs & Humanitarian Organizations</p>
            </div>

            <div className="social-media">
              <h4>Follow Our Journey</h4>
              <div className="social-links">
                <a href="#" className="social-icon">Facebook</a>
                <a href="#" className="social-icon">Instagram</a>
                <a href="#" className="social-icon">LinkedIn</a>
                <a href="#" className="social-icon">Twitter</a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3>Send us a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="form-textarea"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>

            {submitted && (
              <p className="success-message">✓ Thank you! Your message has been sent.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
