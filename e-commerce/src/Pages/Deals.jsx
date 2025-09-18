import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../assets/css/responsive.css";

const Deals = () => {
  const deals = [
    { id: 1, name: "Smartphone Pro", oldPrice: "$499", newPrice: "$299", image: "https://picsum.photos/300/200?11", discount: "-40%" },
    { id: 2, name: "Wireless Headphones", oldPrice: "$199", newPrice: "$99", image: "https://picsum.photos/300/200?12", discount: "-50%" },
    { id: 3, name: "Smartwatch X", oldPrice: "$249", newPrice: "$149", image: "https://picsum.photos/300/200?13", discount: "-40%" },
    { id: 4, name: "Laptop Ultra", oldPrice: "$1099", newPrice: "$899", image: "https://picsum.photos/300/200?14", discount: "-20%" },
    { id: 5, name: "Gaming Console", oldPrice: "$599", newPrice: "$449", image: "https://picsum.photos/300/200?15", discount: "-25%" },
    { id: 6, name: "Bluetooth Speaker", oldPrice: "$129", newPrice: "$79", image: "https://picsum.photos/300/200?16", discount: "-40%" },
  ];

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="deals-hero">
        <div className="deals-hero-content">
          <h1>Hot Deals of the Day</h1>
          <p>Grab your favorite products at unbeatable prices!</p>
          <button>Shop Now</button>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="deals-countdown">
        <h2>⏳ Limited Time Offer</h2>
        <p>Hurry up! These deals expire in:</p>
        <div className="countdown-timer">
          <div><span>02</span><p>Days</p></div>
          <div><span>14</span><p>Hours</p></div>
          <div><span>36</span><p>Minutes</p></div>
          <div><span>54</span><p>Seconds</p></div>
        </div>
      </section>

      {/* Deals Grid */}
      <section className="deals-section">
        <h2>Today’s Best Deals</h2>
        <div className="deals-grid">
          {deals.map((d) => (
            <div key={d.id} className="deal-card">
              <div className="deal-badge">{d.discount}</div>
              <img src={d.image} alt={d.name} />
              <h3>{d.name}</h3>
              <p className="old-price">{d.oldPrice}</p>
              <p className="new-price">{d.newPrice}</p>
              <div className="btn-group">
                <button>Add to Cart</button>
                <button className="order">Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Deals;
