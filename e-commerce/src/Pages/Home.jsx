import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router";
import ProductSlider from "../Components/ProductSlider";
import FetchProduct from "../Services/FetchProduct";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router";
import ProductContext from "../Context/ProductContext";
import CarouselHome from "../Components/carouselhome";

const Home = () => {
const { addToCart } = useContext(ProductContext)
useEffect(()=>{
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
},[])

  const [currentSlide, setCurrentSlide] = useState(0);
  // const [loading, setLoading] = useState(true); // Loader state
  const navigate = useNavigate();


 // Hero banners
const banners = [
  {
    id: 1,
    title: "Welcome to Our Store",
    subtitle: "Discover the best deals",
    image: "data:image/jpeg;base64,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"
  },
  {
    id: 2,
    title: "Summer Collection",
    subtitle: "Trendy outfits & accessories",
    image: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?ixlib=rb-4.0.3&q=80&w=1400&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Tech Essentials",
    subtitle: "Latest gadgets at best prices",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&q=80&w=1400&auto=format&fit=crop"
  }
];




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

 

  return (
    <div>
      {/* Hero Banner */}
      {/* <section
        className="hero-banner"
        style={{ marginTop: "93px", backgroundImage: `url(${banners[currentSlide].image})` }}
      >

        <div className="hero-content">
          <h1>{banners[currentSlide].title}</h1>
          <p>{banners[currentSlide].subtitle}</p>
          <button className="shop-btn" onClick={() => navigate("/shop")}>
            Shop Now
          </button>
        </div>
      </section> */}
<CarouselHome />
      {/* Product Grid */}
      <section className="featured-section">
        <h2 className="section-title">All Products</h2>

        <div className="product-grid">
          {products.slice(0, 16).map((product) => (
            <div key={product.id} className="product-card">
              <div className="img-box">
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <h3>{product.title}</h3>
              <p className="price">{product.price}</p>
              <div className="btn-group">

                <button
                  className="cart-btn"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  className="order-btn"
                  onClick={() => {
                    addToCart(product);
                    navigate("/orderSummary");
                  }}
                >
                  Buy Now
                </button>

              </div>
            </div>
          ))}
        </div>

        {/* ✅ Product Slider */}
        <ProductSlider products={products} />
      </section>
    </div>
  );
};

export default Home;
