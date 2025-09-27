import React from "react";

const About = () => {
  const team = [
    {
      id: 1,
      name: "Rafay Nizam",
      role: "certified Frontend Developer",
      img: "https://avatars.githubusercontent.com/u/189576142?v=4",
    },
    {
      id: 2,
      name: "Muhammad Faiq",
      role: "Lead and certified Frontend Developer",
      img: "https://avatars.githubusercontent.com/u/185547480?v=4",
    },
    {
      id: 3,
      name: "Ahmed Siddiqui",
      role: "certified Frontend Developer",
      img: "https://avatars.githubusercontent.com/u/116776898?v=4",
    },
  ];

  return (
    <div>
      {/* Hero Banner */}
      {/* <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p className="breadcrumb">
            <a href="/">Home</a> / <span>About</span>
          </p>
        </div>
      </section> */}

      {/* Who We Are */}
      <section className="about-section">
        <div className="about-container">
          <h2 className="section-heading">Who We Are</h2>
          <p>
            Our Team <br />

            Our multidisciplinary team brings together designers, developers, and support specialists who share a single goal: to make every customer interaction seamless, enjoyable, and affordable. Collaboration, innovation, and customer focus drive everything we do.
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
