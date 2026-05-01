// Landing.jsx
import React from 'react';
import './Landing.css';

function Landing() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">Acgis</div>
          <h1>Building Trust Through Technology</h1>
          <div className="hero-app">
            <span className="app-icon">⚫</span>
            <h2>Our App: The Halo Ball</h2>
          </div>
          <p className="hero-contact">Contact us for any questions.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Vicious Cycle Section */}
      <section className="cycle-section">
        <div className="container">
          <h2>A Vicious Cycle That Defeats Itself</h2>
          <p className="section-subtitle">We are not a one-size-fits-all solution. We offer a variety of solutions to meet your needs.</p>
          <div className="cards-grid">
            <div className="card">
              <h3>Customizable</h3>
              <p>We can build a solution that fits your specific needs.</p>
            </div>
            <div className="card">
              <h3>Scalable</h3>
              <p>We have the infrastructure to support your growth.</p>
            </div>
            <div className="card">
              <h3>Reliable</h3>
              <p>We have a proven track record of success.</p>
            </div>
          </div>
          <div className="features-list">
            <span>🤖 AI-powered algorithms</span>
            <span>📊 Machine learning</span>
            <span>⚙️ Robotics</span>
          </div>
        </div>
      </section>

      {/* Three Apps Section */}
      <section className="apps-section">
        <div className="container">
          <h2>Three Apps, One Ecosystem.</h2>
          <p className="tagline">One Goal.</p>
          <div className="cards-grid">
            <div className="card">
              <h3>Consistency</h3>
              <p>All three apps are designed to work together seamlessly.</p>
            </div>
            <div className="card">
              <h3>Ease of use</h3>
              <p>The apps are easy to learn and use.</p>
            </div>
            <div className="card">
              <h3>Integration</h3>
              <p>The apps can be integrated with other systems.</p>
            </div>
          </div>
          <div className="platform-icons">
            <span>📱 Mobile App</span>
            <span>🌐 Web App</span>
            <span>💻 Desktop App</span>
          </div>
        </div>
      </section>

      {/* Build First Smart Section */}
      <section className="smart-section">
        <div className="container">
          <h2>Build first smart.</h2>
          <div className="cards-grid">
            <div className="card">
              <h3>Speed</h3>
              <p>We deliver results faster than anyone else.</p>
            </div>
            <div className="card">
              <h3>Quality</h3>
              <p>We produce high-quality products.</p>
            </div>
            <div className="card">
              <h3>Cost-effective</h3>
              <p>We offer a cost-effective solution.</p>
            </div>
          </div>
          <div className="features-list">
            <span>📡 Built-in sensors</span>
            <span>☁️ Cloud connectivity</span>
            <span>🖱️ Easy-to-use interface</span>
          </div>
        </div>
      </section>

      {/* Four Layers Section */}
      <section className="trust-section">
        <div className="container">
          <h2>Four layers of Trust-Building.</h2>
          <div className="cards-grid four-cols">
            <div className="card">
              <h3>Trust</h3>
              <p>We build trust through transparency and reliability.</p>
            </div>
            <div className="card">
              <h3>Transparency</h3>
              <p>We are transparent about our processes and decisions.</p>
            </div>
            <div className="card">
              <h3>Reliability</h3>
              <p>We are reliable in delivering on our promises.</p>
            </div>
            <div className="card">
              <h3>Responsiveness</h3>
              <p>We are responsive to customer needs and feedback.</p>
            </div>
          </div>
          <div className="features-list">
            <span>💰 Transparent pricing</span>
            <span>🗺️ Clear product roadmap</span>
            <span>🔄 Regular updates</span>
            <span>🎧 Customer support</span>
          </div>
        </div>
      </section>

      {/* What Makes Acgis Work */}
      <section className="success-section">
        <div className="container">
          <h2>What Makes Acgis Work Where Others Failed.</h2>
          <div className="cards-grid">
            <div className="card">
              <h3>Innovation</h3>
              <p>We are at the forefront of innovation in the industry.</p>
            </div>
            <div className="card">
              <h3>Expertise</h3>
              <p>We have deep expertise in our field.</p>
            </div>
            <div className="card">
              <h3>Industry knowledge</h3>
              <p>We have extensive knowledge of the industry.</p>
            </div>
          </div>
          <div className="features-list">
            <span>🔬 State-of-the-art technology</span>
            <span>👥 Strong team</span>
            <span>📈 Continuous improvement</span>
          </div>
        </div>
      </section>

      {/* Pilot to National Scale */}
      <section className="scale-section">
        <div className="container">
          <h2>From Pilot to National Scale.</h2>
          <div className="cards-grid">
            <div className="card">
              <h3>Scale</h3>
              <p>We have achieved scale in our operations.</p>
            </div>
            <div className="card">
              <h3>Global reach</h3>
              <p>We have a global reach.</p>
            </div>
            <div className="card">
              <h3>High standards</h3>
              <p>We maintain high standards of quality.</p>
            </div>
          </div>
          <div className="features-list">
            <span>🌍 Global presence</span>
            <span>✅ Quality control</span>
            <span>📈 Continuous improvement</span>
          </div>
        </div>
      </section>

      {/* Diversified Model */}
      <section className="diversified-section">
        <div className="container">
          <h2>A Diversified Model Built to Last.</h2>
          <div className="cards-grid">
            <div className="card">
              <h3>Diversification</h3>
              <p>We have diversified our business model.</p>
            </div>
            <div className="card">
              <h3>Long-term focus</h3>
              <p>We have a long-term focus.</p>
            </div>
            <div className="card">
              <h3>Adaptability</h3>
              <p>We are adaptable to changing market conditions.</p>
            </div>
          </div>
          <div className="features-list">
            <span>📊 Market research</span>
            <span>🤝 Strategic partnerships</span>
            <span>💡 Innovative solutions</span>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="safety-section">
        <div className="container">
          <h2>Safety Indelgence in Your Pocket.</h2>
          <div className="cards-grid">
            <div className="card">
              <h3>Safety</h3>
              <p>We prioritize safety in everything we do.</p>
            </div>
            <div className="card">
              <h3>Convenience</h3>
              <p>We offer convenient access to our services.</p>
            </div>
            <div className="card">
              <h3>Affordability</h3>
              <p>We offer affordable pricing options.</p>
            </div>
          </div>
          <div className="features-list">
            <span>👆 User-friendly interface</span>
            <span>🔒 Secure transactions</span>
            <span>💵 Affordable rates</span>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Help Bridge the Gap?</h2>
          <p>If you have any questions or would like to discuss how Acgis can help bridge the gap, please don't hesitate to contact us.</p>
          <button className="cta-button large">Contact Us Today</button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; 2026 Acgis. Building Trust Through Technology.</p>
        </div>
      </footer>
    </div>
  );
}

export default Landing;