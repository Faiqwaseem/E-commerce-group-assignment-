import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router";
import ProductSlider from "../Components/ProductSlider";
import FetchProduct from "../Services/FetchProduct";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router";
import ProductContext from "../Context/ProductContext";
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate()
  const { addToCart } = useContext(ProductContext)


const banners = [
  {
    id: 1,
    title: "Mega Sale",
    subtitle: "Up to 50% Off Electronics",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." // tumhari base64 wali image
  },
  {
    id: 2,
    title: "Fashion Fiesta",
    subtitle: "Trendy Outfits at Best Prices",
    image:
      "https://picsum.photos/id/237/1920/1080"
  }
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-container">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`banner-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${banner.image})` }}
        >
          <div className="banner-overlay">
            <h1>{banner.title}</h1>
            <p>{banner.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  // Products
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: FetchProduct,
  });
  const products = data?.products || [];
  console.log(products);


  return (
    <div>



      {/* Hero Banner */}
      <section
        className="hero-banner"
        style={{ backgroundImage: `url(${banners[currentSlide].image})` }}
      >
        <div className="hero-content">
          <h1>{banners[currentSlide].title}</h1>
          <p>{banners[currentSlide].subtitle}</p>
          <button className="shop-btn" onClick={() => navigate("/shop")}>Shop Now</button>

        </div>
      </section>

      {/* Product Grid */}
      <section className="featured-section">
        <h2 className="section-title">All Products</h2>

        {/* First 4 Products */}


        <div className="product-grid">
          {products.slice(0, 15).map((product) => (
            <div key={product.id} className="product-card">
              <div className="img-box">
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <h3>{product.title}</h3>
              <p className="price">{product.price}</p>
              <div className="btn-group">
                <button className="cart-btn"
                  onClick={() => addToCart(product)} >Add to Cart</button>
                <button className="order-btn" onClick={() => { addToCart(product); navigate('/oderSummary') }}>Buy Now</button>
              </div>
            </div>
          ))}
        </div>


        {/* ✅ Slider */}


        {/* Remaining Products */}
        {/* <div className="product-grid">
        {products.slice(15).map((product) => (
          <div key={product.id} className="product-card">
            <div className="img-box">
              <img src={product.thumbnail} alt={product.title} />
            </div>
            <h3>{product.title}</h3>
            <p className="price">{product.price}</p>
            <div className="btn-group">
              <button className="cart-btn">Add to Cart</button>
              <button className="order-btn">Buy Now</button>
            </div>
          </div>
        ))}
      </div> */}

        <ProductSlider products={products} />


      </section>


    </div>
  );
};

export default Home;
