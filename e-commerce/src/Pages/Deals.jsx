import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../assets/css/responsive.css";
import { useQuery } from "@tanstack/react-query";
import FetchProduct from "../Services/FetchProduct";

const Deals = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 36,
    seconds: 54,
  });

  // ⏳ Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--; seconds = 59;
        } else if (hours > 0) {
          hours--; minutes = 59; seconds = 59;
        } else if (days > 0) {
          days--; hours = 23; minutes = 59; seconds = 59;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // 🔥 Fetch products from same API as Home.jsx
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: FetchProduct,
  });
  const deals = data?.products || [];

  return (
    <div>
    

      {/* Hero Section */}
      <section className="deals-hero">
        <div className="deals-hero-content">
          <h1> Hot Deals of the Day</h1>
          <p>Grab your favorite products at unbeatable prices!</p>
          <button>Shop Now</button>
        </div>
      </section>

      {/* Countdown */}
      <section className="deals-countdown">
        <h2>⏳ Limited Time Offer</h2>
        <p>Hurry up! These deals expire in:</p>
        <div className="countdown-timer">
          <div><span>{String(timeLeft.days).padStart(2, "0")}</span><p>Days</p></div>
          <div><span>{String(timeLeft.hours).padStart(2, "0")}</span><p>Hours</p></div>
          <div><span>{String(timeLeft.minutes).padStart(2, "0")}</span><p>Minutes</p></div>
          <div><span>{String(timeLeft.seconds).padStart(2, "0")}</span><p>Seconds</p></div>
        </div>
      </section>

      {/* Deals Grid */}
      <section className="deals-section">
        <h2>Today’s Best Deals</h2>

        {isLoading && <p>Loading deals...</p>}
        {error && <p style={{ color: "red" }}>Failed to load deals</p>}

        <div className="deals-grid">
          {deals.slice(0, 12).map((d) => (
            <div key={d.id} className="deal-card">
              {d.discount && <div className="deal-badge">{d.discount}</div>}
              <img src={d.thumbnail} alt={d.title} />
              <h3>{d.title}</h3>
              {d.oldPrice && <p className="old-price">${d.oldPrice}</p>}
              <p className="new-price">${d.price}</p>
              <div className="btn-group">
                <button>Add to Cart</button>
                <button className="order">Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

 
    </div>
  );
};

export default Deals;
