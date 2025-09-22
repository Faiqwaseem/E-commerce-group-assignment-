import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "../assets/css/responsive.css";

const Contact = () => {
  return (
    <div>
      

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you! Let’s talk.</p>
        </div>
      </section>

      {/* Info Section */}
      <section className="contact-info">
        <div className="info-grid">
          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <h3>Address</h3>
            <p>123 Market Street, New York, USA</p>
          </div>
          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <h3>Email</h3>
            <a href="mailto:rafaynizam834@gmail.com">rafaynizam834@gmail.com</a>
          </div>
          <div className="info-card">
            <FaPhoneAlt className="info-icon" />
            <h3>Phone</h3>
            <a href="tel:+923359389576">+92 335 9389576</a>
          </div>
          <div className="info-card">
            <FaWhatsapp className="info-icon whatsapp" />
            <h3>WhatsApp</h3>
            <a
              href="https://wa.me/923359389576"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Map */}
      <section className="contact-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.909059792592!2d-74.00601568459393!3d40.71277597933142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQyJzQ2LjAiTiA3NMKwMDAnMjAuMCJX!5e0!3m2!1sen!2sus!4v1617043200000!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      
    </div>
  );
};

export default Contact;
