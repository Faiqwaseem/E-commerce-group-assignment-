import React, { useEffect, useRef, useState } from "react";

/*
  Usage:
    import ProductSlider from "../Components/ProductSlider";
    <ProductSlider products={products} />
*/

const ProductSlider = ({ products = [], autoplay = true, interval = 3000 }) => {
  const trackRef = useRef(null);
  const autoplayRef = useRef(null);
  const isHovering = useRef(false);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  const [index, setIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  // calculate slidesPerView based on window width
  function getSlidesPerView() {
    const w = window.innerWidth;
    if (w >= 1200) return 4;    // wide laptop / desktop
    if (w >= 992) return 4;     // large screens
    if (w >= 768) return 3;     // tablet horizontal
    if (w >= 426) return 2;     // phone landscape / large phone
    if (w >= 360) return 2;     // phone
    return 1;                   // very small (<=320)
  }

  // update slidesPerView on resize
  useEffect(() => {
    const onResize = () => {
      const spv = getSlidesPerView();
      setSlidesPerView((prev) => {
        if (prev !== spv) {
          // adjust index to stay in bounds when spv changes
          const maxIndex = Math.max(0, products.length - spv);
          setIndex((i) => Math.min(i, maxIndex));
        }
        return spv;
      });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products.length]);

  const maxIndex = Math.max(0, products.length - slidesPerView);

  // autoplay
  useEffect(() => {
    if (!autoplay || products.length <= slidesPerView) return;
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (!isHovering.current) {
        setIndex((i) => (i >= maxIndex ? 0 : i + 1));
      }
    }, interval);
    return () => clearInterval(autoplayRef.current);
  }, [autoplay, interval, slidesPerView, products.length, maxIndex]);

  // Prev / Next
  const handlePrev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const handleNext = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  // Hover handlers to pause autoplay
  const onMouseEnter = () => (isHovering.current = true);
  const onMouseLeave = () => (isHovering.current = false);

  // Touch handlers for swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    const delta = touchDeltaX.current;
    const threshold = 40; // px
    if (delta > threshold) {
      handlePrev();
    } else if (delta < -threshold) {
      handleNext();
    }
    touchDeltaX.current = 0;
  };

  // compute translate percentage
  const translatePercent = () => {
    // Each slide is width = 100 / slidesPerView %
    return (index * 100) / slidesPerView;
  };

  return (
    <section
      className="product-slider"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <h3 className="section-title">Trending Product</h3>

      {/* Prev / Next buttons */}


      <div
        className="slider-viewport"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="slider-track"
          ref={trackRef}
          style={{
            transform: `translateX(-${translatePercent()}%)`,
            transition: "transform 520ms cubic-bezier(.22,.9,.33,1)",
          }}
        >
          {products.slice(5, 15).map((product) => (
            <div
              key={product.id}
              className="slider-card"
              style={{ minWidth: `${100 / slidesPerView}%` }}
            >
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
        </div>
      </div>

      {/* optional indicators */}
      <div className="slider-dots" aria-hidden>
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSlider;
