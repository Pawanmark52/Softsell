import React from 'react';
import './Hero.css';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <img src={logo} alt="SoftSell Logo" className="logo" />
       <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h1>Sell Your Unused Software Licenses</h1>
</motion.div>
        <p>Get cash for licenses you’re not using. Fast, secure, and hassle-free.</p>
        <button>Get a Free Quote</button>
      </div>
    </section>
  );
};

export default HeroSection;