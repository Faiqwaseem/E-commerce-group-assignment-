import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router";

import ProductContext from "../Context/ProductContext";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);
const { cartItems } = useContext(ProductContext);
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (

    <div>
      <header className="nav-wrap">
        <div className="container">
          <a className="brand" href="#">
            <div className="logo">EC</div>
            <div>
              <h1>ShopMate</h1>
              <p>Daily essentials</p>
            </div>
          </a>

          <nav>
            <div
              className={`nav-links ${menuOpen ? "active" : ""}`}
              ref={navRef}
            >
              <Link className="nav-list" to="/">Home</Link>
              <Link className="nav-list" to="/shop">Shop</Link>
              <Link className="nav-list" to="/deals">Deals</Link>
              <Link className="nav-list" to="/about">About</Link>
              <Link className="nav-list" to="/contact">Contact</Link>
            </div>
          </nav>



          {/* Actions */}<div className="actions">
  <form className="search">
    <input type="search" placeholder="Search products" />
  </form>


  <Link  
    className={`nav-cart ${cartItems.length > 0 ? "active" : ""}`}
    to="/oderSummary" 
  > 
    <AddShoppingCartIcon /> 
    {cartItems.length > 0 && (
      <span className="cart-count">{cartItems.length}</span>
    )}
  </Link>

  <button
    className={`icon-btn hamburger ${menuOpen ? "open" : ""}`}
    onClick={() => setMenuOpen(!menuOpen)}
    ref={toggleRef}
  >
    ☰
  </button>
</div>
          
        </div>
      </header>
    </div>
  );
};

export default Navbar;
