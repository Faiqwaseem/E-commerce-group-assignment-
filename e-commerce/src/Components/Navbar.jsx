import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router";

import ProductContext from "../Context/ProductContext";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FetchProduct from "../Services/FetchProduct";
import { useQuery } from "@tanstack/react-query";

const Navbar = () => {

  const navigate = useNavigate()

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  const searchRef = useRef(null);


  const { cartItems } = useContext(ProductContext);

  // ✅ Fetch products here (so search will always have data)
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: FetchProduct,
  });
  const products = data?.products || [];


  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target) &&
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
        setFilteredProducts([]);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // ✅ Handle search input
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim().length > 0 && products.length > 0) {
      const matches = products.filter((p) =>
        p.title.toLowerCase().includes(query)
      );
      setFilteredProducts(matches.slice(0, 6)); // max 6 results
    } else {
      setFilteredProducts([]);
    }
  };

  const handleSelectProduct = (product) => {
    setSearchQuery("");
    setFilteredProducts([]);
    navigate(`/product/${product.id}`);
  };

  return (
    <div>
      <header className="nav-wrap">
        <div className="container">
          {/* Brand */}
          <a className="brand" href="#">
            <div className="logo">EC</div>
            <div>
              <h1>ShopMate</h1>
              <p>Daily essentials</p>
            </div>
          </a>

          {/* Nav Links */}
          <nav>
            <div className={`nav-links ${menuOpen ? "active" : ""}`}>
              <Link className="nav-list" to="/">Home</Link>
              <Link className="nav-list" to="/shop">Shop</Link>
              <Link className="nav-list" to="/deals">Deals</Link>
              <Link className="nav-list" to="/about">About</Link>
              <Link className="nav-list" to="/contact">Contact</Link>
            </div>
          </nav>

          {/* Actions */}
          <div className="actions">
            {/* Search */}
            <div className="search">
              <input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>

            {/* Dropdown */}
            {filteredProducts.length > 0 && (
              <ul className="search-results">
                {filteredProducts.map((p) => (
                  <li key={p.id} onClick={() => handleSelectProduct(p)}>
                    {p.title}
                  </li>
                ))}
              </ul>
            )}

            {/* Cart */}
            <Link
              className={`nav-cart ${cartItems.length > 0 ? "active" : ""}`}
              to="/orderSummary"
            >
              <AddShoppingCartIcon />
              {cartItems.length > 0 && (
                <span className="cart-count">{cartItems.length}</span>
              )}
            </Link>

            {/* Login */}
            <button className="loginbtn" onClick={() => navigate("/loginSign")}>
              Log in
            </button>

            {/* Hamburger */}
            <button
              className={`icon-btn hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
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
