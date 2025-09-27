import React from 'react'
import '../assets/css/deals.css'
const DealsHero = () => {
    return (
        <div>
            <section className="hero" aria-label="Hero banner">
                <div className="hero-left">
                    <div className="eyebrow">Limited Offer • 24% OFF</div>

                    <h1>
                        Quality gadgets, <br />
                        delivered to your door.
                    </h1>

                    <p className="lead">
                        Discover top-rated electronics and accessories — fast delivery, secure
                        payments, and reliable returns. Shop smart with exclusive deals every
                        week.
                    </p>

                    <div className="cta-group" role="group" aria-label="Primary actions">
                        <button
                            className="btn btn-primary"
                            onClick={() => (window.location.href = "#shop")}
                        >
                            🛒 Shop Now
                        </button>
                        <button
                            className="btn btn-ghost"
                            onClick={() => (window.location.href = "#deals")}
                        >
                            View Deals
                        </button>
                    </div>

                    <div className="small-features" aria-hidden="false">
                        <div className="feature">
                            <div className="dot">🚚</div>
                            <div>
                                <strong>Free Delivery</strong>
                                <div style={{ color: "var(--muted)", fontSize: "13px" }}>
                                    On orders ₨1999+
                                </div>
                            </div>
                        </div>

                        <div className="feature">
                            <div className="dot">🔒</div>
                            <div>
                                <strong>Secure Payments</strong>
                                <div style={{ color: "var(--muted)", fontSize: "13px" }}>
                                    Trusted gateways
                                </div>
                            </div>
                        </div>

                        <div className="feature">
                            <div className="dot">↩️</div>
                            <div>
                                <strong>Easy Returns</strong>
                                <div style={{ color: "var(--muted)", fontSize: "13px" }}>
                                    7-day returns
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-right" aria-hidden="false">
                    <div className="card" role="article" aria-label="Featured product">
                        <div className="product-figure">
                            <img
                                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80&auto=format&fit=crop"
                                alt="Featured product"
                            />
                        </div>

                        <div className="info">
                            <div className="product-title">Aurora Smart Headphones</div>
                            <div className="product-desc">
                                Noise-cancelling, 40h battery, wireless charging.
                            </div>
                            <div className="price">₨13,499</div>

                            <div className="buy-row">
                                <button
                                    className="btn btn-primary"
                                    style={{ padding: "8px 12px", fontSize: "14px" }}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-shape" aria-hidden="true"></div>
                </div>
            </section>
        </div>
    )
}

export default DealsHero