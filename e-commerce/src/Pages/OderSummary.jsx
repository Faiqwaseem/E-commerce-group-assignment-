import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
const oderSummary = () => {
    return (
        <div>
            <section className="cart-container">
                <h2>Your Shopping Cart</h2>

                <div className="cart-items">
                    {/* <!-- Cart Item --> */}
                    <div className="cart-item">
                        <img src="https://techarc.pk/wp-content/uploads/2024/09/boost-sync-wireless-headset-matte-black-1-techarc.pk_-1.webp"
                            alt="Product" />
                        <div className="item-details">
                            <h3>Wireless Headphones</h3>
                            <p>$50.00</p>
                            <div className="quantity">
                                <button className="qty-btn minus">-</button>
                                <input type="number" value="1" min="1" />
                                <button className="qty-btn plus">+</button>
                            </div>
                        </div>
                        <button className="remove-btn">✖</button>
                    </div>

                    <div className="cart-item">
                        <img src="https://kingshub.pk/cdn/shop/files/Untitleddesign-6c4bbae9-6746-4b3b-add3-dcfba20729db-_1.png?v=1742058041&width=1024"
                            alt="Product" />
                        <div className="item-details">
                            <h3>Smart Watch</h3>
                            <p>$120.00</p>
                            <div className="quantity">
                                <button class="qty-btn minus">-</button>
                                <input type="number" value="1" min="1" />
                                <button className="qty-btn plus">+</button>
                            </div>
                        </div>
                        <button className="remove-btn">✖</button>
                    </div>
                </div>

                {/* <!-- Cart Summary --> */}
                <div className="cart-summary">
                    <h3>Order Summary</h3>
                    <p>Subtotal: <span id="subtotal">$170.00</span></p>
                    <button className="checkout-btn">Proceed to Checkout</button>
                </div>
            </section>
        </div>
    )
}

export default oderSummary