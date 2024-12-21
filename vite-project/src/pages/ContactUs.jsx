import React from 'react';
import './ContactUsHeader.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <header className="contact-us-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you!</p>
      </header>
      <div className="contact-us-content">
        <section className="contact-form">
          <h2>Get in Touch</h2>
          <form className="form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </section>

        <section className="contact-details">
          <h2>Contact Details</h2>
          <p>Email: support@ecommerce.com</p>
          <p>Phone: +1 234 567 890</p>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
