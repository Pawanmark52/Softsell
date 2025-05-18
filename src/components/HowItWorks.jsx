import React from 'react';
import './HowItWorks.css';

const steps = [
  { icon: '📤', title: 'Upload License', desc: 'Provide details of your unused software license.' },
  { icon: '🔍', title: 'Get Valuation', desc: 'Receive a fair market valuation instantly.' },
  { icon: '💵', title: 'Get Paid', desc: 'Receive payment directly to your account.' }
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2>How It Works</h2>
        <div className="steps">
          {steps.map((step, i) => (
            <div className="step" key={i}>
              <div className="icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
