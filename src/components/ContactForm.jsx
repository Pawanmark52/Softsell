import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = 'Name required';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email required';
    if (!form.company) errs.company = 'Company required';
    if (!form.licenseType) errs.licenseType = 'License type required';
    if (!form.message) errs.message = 'Message required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valErrors = validate();
    if (Object.keys(valErrors).length === 0) {
      console.log(form);
      alert('Thanks for reaching out!');
      setForm({ name: '', email: '', company: '', licenseType: '', message: '' });
      setErrors({});
    } else {
      setErrors(valErrors);
    }
  };

  return (
    <section className="contact-form">
      <div className="container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          {['name', 'email', 'company'].map((field) => (
            <div key={field}>
              <input
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                placeholder={field[0].toUpperCase() + field.slice(1)}
                value={form[field]}
                onChange={handleChange}
              />
              {errors[field] && <span>{errors[field]}</span>}
            </div>
          ))}

          <div>
            <select name="licenseType" value={form.licenseType} onChange={handleChange}>
              <option value="">Select License Type</option>
              <option value="OS">Operating System</option>
              <option value="Suite">Productivity Suite</option>
              <option value="AV">Antivirus</option>
              <option value="Other">Other</option>
            </select>
            {errors.licenseType && <span>{errors.licenseType}</span>}
          </div>

          <div>
            <textarea
              name="message"
              rows="4"
              placeholder="Your message"
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && <span>{errors.message}</span>}
          </div>

          <button type="submit">Submit Inquiry</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
