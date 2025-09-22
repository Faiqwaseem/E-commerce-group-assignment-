import React from "react";
import "../assets/css/preloader.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="loader-glass">
        <div className="brand-wrapper">
          <div className="logo-circle">EC</div>
          <h1 className="brand-name">
            {Array.from("ShopMate").map((letter, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.12}s` }}>
                {letter}
              </span>
            ))}
          </h1>
        </div>
        <p className="tagline">Daily essentials at your fingertips</p>
      </div>
    </div>
  );
};

export default Preloader;
