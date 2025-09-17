import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

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
              <Link className="nav-list" onClick={(e) => {
                e.preventDefault(); // navigation rokti hai
                alert("This Page is Not Active!");
              }} to="/about">About</Link>
              <Link className="nav-list" onClick={(e) => {
                e.preventDefault(); // navigation rokti hai
                alert("This Page is Not Active!");
              }} to="/contact">Contact</Link>
            </div>
          </nav>



          {/* Actions */}
          <div className="actions">
            <form className="search">
              <input type="search" placeholder="Search products" />
            </form>
            <button className="icon-btn">❤</button>
            {/* <button className="icon-btn cart">
              <AddShoppingCartIcon /><span className="badge">3</span>
            </button> */}
                <Link className="icon-btn cart mycaricon" to="/oderSummary"> <AddShoppingCartIcon /></Link>
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
