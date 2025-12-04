// Company Info Component
export default function CompanyInfo() {
  return (
    <section className="company-info-section">
      <div className="container">
        <div className="company-header">
          <h1 className="company-title">About PinaLab</h1>
          <p className="company-tagline">Turning Agricultural Waste Into Sustainable Fashion</p>
        </div>

        <div className="company-content">
          <div className="company-mission">
            <h2>Our Mission</h2>
            <p>
              At PinaLab, we transform pineapple leaves—traditionally considered agricultural waste—into 
              premium vegan leather and sustainable textiles. We empower local farmers by purchasing their 
              pineapple leaves, process them in our in-house factory, and create eco-friendly fashion products 
              that don't harm the planet. Our mission is to prove that sustainable fashion can be both 
              beautiful and responsible.
            </p>
          </div>

          <div className="company-history">
            <h2>Our Story</h2>
            <p>
              PinaLab was born from a simple question: What if we could turn waste into value? Founded by 
              Ashraful Islam Nobin, Bishal, and Shishir, we established our in-house processing facility 
              to convert pineapple leaves into durable, sustainable materials. Today, we partner with 
              government agencies, NGOs, and international organizations like the United Nations to provide 
              shelter materials and refugee camp supplies. From shoes and shirts to pants and belts, every 
              PinaLab product tells a story of innovation, sustainability, and social impact.
            </p>
          </div>

          <div className="company-values">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>🌍 Sustainability</h3>
                <p>100% eco-friendly, zero-waste production process</p>
              </div>
              <div className="value-item">
                <h3>🤝 Community</h3>
                <p>Supporting local farmers and creating livelihoods</p>
              </div>
              <div className="value-item">
                <h3>🌱 Innovation</h3>
                <p>Pioneering pineapple fiber technology and vegan leather</p>
              </div>
              <div className="value-item">
                <h3>💚 Impact</h3>
                <p>Partnering with UN, NGOs for humanitarian projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
