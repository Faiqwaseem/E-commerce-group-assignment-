import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaMapMarkerAlt, FaEnvelope, FaClock,  FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import '../assets/css/contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p className="contact-subtitle">
        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>
      
      <div className="contact-content">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          
          <div className="info-item">
            <div className="info-icon">
              <FaMapMarkerAlt className="iconmytheme" />
            </div>
            <div className="info-text">
              <h4>Our Address</h4>
              <p>123 Commerce Street, Business District, City 10001</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <FaWhatsapp className="iconmytheme" />
            </div>
            <div className="info-text">
              <h4>Phone Number</h4>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <FaEnvelope className="iconmytheme" />
            </div>
            <div className="info-text">
              <h4>Email Address</h4>
              <p>support@ecommercestore.com</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <FaClock className="iconmytheme" />
            </div>
            <div className="info-text">
              <h4>Working Hours</h4>
              <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <h3>Send us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                className="form-control" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                className="form-control" 
                placeholder="your.email@example.com" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                className="form-control" 
                placeholder="Message Subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                name="message"
                className="form-control" 
                placeholder="How can we help you?" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
      
      <div className="contact-map">
        <div className="map-placeholder">
          <i className="fas fa-map-marked-alt"></i><iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.909059792592!2d-74.00601568459393!3d40.71277597933142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQyJzQ2LjAiTiA3NMKwMDAnMjAuMCJX!5e0!3m2!1sen!2sus!4v1617043200000!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        </div>
      </div>
      
      <div className="social-links">
        <a href="#" className="social-icon">
          <FaFacebook className="iconmytheme" />
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-twitter"></i>
          <FaTwitter className="iconmytheme" />
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-instagram"></i>
          <FaInstagram className="iconmytheme" />
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
          <FaLinkedin className="iconmytheme" />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
//  <section className="contact-map">
//         <iframe
//           title="map"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.909059792592!2d-74.00601568459393!3d40.71277597933142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQyJzQ2LjAiTiA3NMKwMDAnMjAuMCJX!5e0!3m2!1sen!2sus!4v1617043200000!5m2!1sen!2sus"
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </section>