// src/Components/Footer.jsx
import React from "react";
import "../assets/css/responsive.css";

const Footer = () => {
  return (

    <footer>
      <div className="footer-container">
        <div>
          <div className="footer-logo">
            <div className="logo">EC</div>
            <span style={{ fontWeight: 700, fontSize: '18px' }}>ShopMate</span>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '14px' }}>
            Your trusted e-commerce partner for essentials and lifestyle products.
          </p>
          <div className="social-links">
            <a href="#">🌐</a>
            <a href="#">📘</a>
            <a href="#">🐦</a>
            <a href="#">📸</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Shop</h4>
          <a href="#">New Arrivals</a>
          <a href="#">Best Sellers</a>
          <a href="#">Discounts</a>
          <a href="#">Gift Cards</a>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">Press</a>
        </div>

        <div className="footer-section">
          <h4>Help</h4>
          <a href="#">Contact</a>
          <a href="#">Returns</a>
          <a href="#">FAQs</a>
          <a href="#">Shipping</a>
        </div>

        <div className="footer-section newsletter">
          <h4>Newsletter</h4>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 ShopMate. All rights reserved. | Privacy Policy | Terms
      </div>
    </footer>
  );
};

export default Footer;
