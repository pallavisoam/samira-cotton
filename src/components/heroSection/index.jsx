import React from 'react';
import SurgicalGroup from '../../assets/images/surgicalGroup.png';
import './index.css';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate()
  const handleViewProduct = () => {
    navigate('/our-products')
  }
  return (
    <section className="hero-section" id='home'>
      <div className="hero-overlay">
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <h1 className="hero-title heading-dark">
              Reliable Medical Equipment for Every Healthcare Need
            </h1>
            <p className="hero-text heading-light">
              As a trusted manufacturer, seller, and trader of medical equipment, we deliver certified, high-quality products to hospitals, clinics, and healthcare professionals—ensuring safety, accuracy, and reliability.
            </p>
            <div className="hero-buttons">
              <button className="btn dark-bg-button" onClick={handleViewProduct}>Explore Our Products</button>
              <button className="btn btn-outline-lights">Get a Quote</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
