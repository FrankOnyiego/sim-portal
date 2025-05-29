import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // External CSS for styling

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Access Free Teaching aids!</h1>
          <p>Take the classroom outside to Explore, learn, and grow.</p>
          <a 
            href="https://chat.whatsapp.com/BCnURfiw7irEGnLIoYHH47" 
            style={{ color: 'white', textDecoration: 'none' }} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button"
          >
            <i className="fab fa-whatsapp" style={{ marginRight: '8px' }}></i> Join chat          </a>
        </div>
      </header>

      <section className="features-section">
      <div className="feature-card">
  <h3>Physics Simulations</h3>
  <p>Engaging simulations to explore every physics concept.</p>
</div>

<div className="feature-card">
  <h3>Interactive Communities</h3>
  <p>Get detailed explanations and insights from peers.</p>
</div>


        <div className="feature-card">
  <h3>Chemistry Simulations</h3>
  <p>Explore chemistry reactions and concepts through interactive simulations.</p>
</div>

      </section>

      <section className="about-section">
        <h2>About Us</h2>
        <p>We are dedicated to providing high-quality educational tools and resources to help you achieve your learning goals.</p>
      </section>

      <footer className="footer">
        <p>Eduengine © 2025 | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;
