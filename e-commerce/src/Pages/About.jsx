import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../assets/css/responsive.css";

const About = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>We are more than just a store – we’re your shopping companion.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-section">
        <div className="about-container">
          <h2>Our Story</h2>
          <p>
            ShopMate was founded with one simple goal: to make shopping easy,
            affordable, and enjoyable. We believe in offering high-quality
            products at fair prices, while building a community of happy
            customers. From electronics to daily essentials, we bring the best
            deals right to your fingertips.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-grid">
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            To simplify shopping with trust, transparency, and top-notch
            service.
          </p>
        </div>
        <div className="about-card">
          <h3>Our Vision</h3>
          <p>
            To be the most loved online store where every customer feels valued
            and satisfied.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-section">
        <div className="about-container">
          <h2>Why Choose Us?</h2>
          <ul className="why-list">
            <li>✔ Wide range of premium quality products</li>
            <li>✔ Affordable prices with exciting deals</li>
            <li>✔ Fast & reliable delivery</li>
            <li>✔ Customer-first support team</li>
          </ul>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-section">
        <div className="about-container">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {["Alice", "John", "Sophia", "David"].map((name, i) => (
              <div key={i} className="team-card">
                <img
                  src={`https://i.pravatar.cc/200?img=${i + 10}`}
                  alt={name}
                />
                <h4>{name}</h4>
                <p>{i % 2 === 0 ? "Developer" : "Designer"}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <h2>Join Our Journey</h2>
        <p>
          Be a part of the ShopMate family today and experience shopping like
          never before.
        </p>
        <button>Start Shopping</button>
      </section>

      <Footer />
    </div>
  );
};

export default About;
