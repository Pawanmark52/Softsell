import React from 'react';
import './WhyChooseUs.css';

const features = [
  { icon: '🔒', title: 'Secure Transactions', desc: 'Bank-level encryption protects all your transactions.' },
  { icon: '💸', title: 'Best Market Prices', desc: 'We offer top dollar for your software licenses.' },
  { icon: '⚡', title: 'Fast Processing', desc: 'Get paid within 24 hours after approval.' },
  { icon: '🧑‍💼', title: 'Expert Support', desc: 'Dedicated specialists available 24/7.' },
];

const WhyChooseUs = () => (
  <section className="why-choose-us">
    <div className="container">
      <h2>Why Choose Us</h2>
      <div className="features">
        {features.map((f, i) => (
          <div className="feature" key={i}>
            <div className="icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
