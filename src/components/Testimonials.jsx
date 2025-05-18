import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'IT Director',
    company: 'TechForward Inc',
    feedback: 'SoftSell made it incredibly easy to monetize our unused Microsoft licenses. We got 30% more than expected!',
  },
  {
    name: 'Michael Chen',
    role: 'Operations Manager',
    company: 'Digital Solutions Co',
    feedback: 'The entire process took less than 48 hours from submission to payment. Will definitely use again!',
  },
];

const Testimonials = () => (
  <section className="testimonials">
    <div className="container">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((t, i) => (
          <div className="testimonial" key={i}>
            <p className="feedback">"{t.feedback}"</p>
            <p className="name">{t.name}</p>
            <p className="meta">{t.role}, {t.company}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
