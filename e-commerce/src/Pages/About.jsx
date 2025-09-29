import React from "react";

const About = () => {
  const team = [
    {
      id: 1,
      name: "Rafay Nizam",
      role: "Founder & CEO",
      img: "https://picsum.photos/200/200?1",
    },
    {
      id: 2,
      name: "Ali Khan",
      role: "Lead Developer",
      img: "https://picsum.photos/200/200?2",
    },
    {
      id: 3,
      name: "Sara Ahmed",
      role: "Marketing Head",
      img: "https://picsum.photos/200/200?3",
    },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p className="breadcrumb">
            <a href="/">Home</a> / <span>About</span>
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-section">
        <div className="about-container">
          <h2 className="section-heading">Who We Are</h2>
          <p>
            We are a passionate team committed to providing the best products
            and services to our customers. Our mission is to make shopping
            simple, enjoyable, and affordable. With years of experience in the
            industry, we strive to bring quality and trust in every purchase.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-grid">
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            To deliver high-quality products at unbeatable prices while ensuring
            customer satisfaction and building long-term trust.
          </p>
        </div>
        <div className="about-card">
          <h3>Our Vision</h3>
          <p>
            To become a leading global e-commerce platform, known for
            innovation, excellence, and customer-first service.
          </p>
        </div>
      </section>

      {/* Counters */}
      <section className="counter-section">
        <div className="counter-box">
          <h2>500+</h2>
          <p>Happy Customers</p>
        </div>
        <div className="counter-box">
          <h2>120+</h2>
          <p>Brands</p>
        </div>
        <div className="counter-box">
          <h2>1500+</h2>
          <p>Products Sold</p>
        </div>
        <div className="counter-box">
          <h2>24/7</h2>
          <p>Support</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2 className="section-heading">Meet Our Team</h2>
        <div className="team-grid">
          {team.map((member) => (
            <div key={member.id} className="team-card">
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
