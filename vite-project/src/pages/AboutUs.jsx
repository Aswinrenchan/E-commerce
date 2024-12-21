import React from 'react';
import './AboutUsHeader.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Your trusted e-commerce partner.</p>
      </header>
      <div className="about-us-content">
        <section className="our-mission">
          <h2>Our Mission</h2>
          <p>We strive to bring the best shopping experience to our customers. Our mission is to provide a wide range of products at affordable prices with fast delivery and excellent customer service.</p>
        </section>

        <section className="our-story">
          <h2>Our Story</h2>
          <p>Founded in 2020, we have quickly grown into a reliable and trusted e-commerce platform. Our story is driven by innovation and customer-first principles.</p>
        </section>

        <section className="our-values">
          <h2>Our Values</h2>
          <ul>
            <li>Customer Satisfaction</li>
            <li>Quality Products</li>
            <li>Fast and Reliable Delivery</li>
            <li>24/7 Customer Support</li>
          </ul>
        </section>

        <section className="team">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Team member" />
              <h3>John Doe</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Team member" />
              <h3>Jane Smith</h3>
              <p>Chief Operating Officer</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
