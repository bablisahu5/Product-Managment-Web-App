import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h2>✨ New Arrivals Just Dropped</h2>
        <p>Discover the freshest styles of the season, perfect for your vibe.</p>
        <button className="hero-btn">Explore Collection</button>
      </div>
      <div className="hero-img-container">
        <img
          src="https://images.unsplash.com/photo-1600185365986-a089b68840c7?auto=format&fit=crop&w=1740&q=80"
          alt="Fashion hero"
          className="hero-img"
        />
      </div>
    </div>
  );
};

export default Hero;
