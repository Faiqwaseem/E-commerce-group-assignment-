import React from 'react'

const Cart = () => {
    return (
        <div>

            <section className="product-section">
                <h2 className="section-title">Featured Products</h2>
                <div className="product-grid">

                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://kingshub.pk/cdn/shop/files/Untitleddesign-6c4bbae9-6746-4b3b-add3-dcfba20729db-_1.png?v=1742058041&width=1024"
                                alt="Product 1" />
                            <span className="badge-card">New</span>
                        </div>
                        <div className="product-info">
                            <h3 className="product-name">Wireless Headphones</h3>
                            <p className="product-price">$99 <span>$149</span></p>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://techarc.pk/wp-content/uploads/2024/09/boost-sync-wireless-headset-matte-black-1-techarc.pk_-1.webp" alt="Product 2" />
                            <span className="badge-card sale">Sale</span>
                        </div>
                        <div className="product-info">
                            <h3 className="product-name">Smart Watch</h3>
                            <p className="product-price">$120 <span>$180</span></p>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://allmytech.pk/wp-content/uploads/2024/01/81sxn70NZ4L._AC_SL1500_-600x626.jpg-1.webp" alt="Product 3" />
                        </div>
                        <div className="product-info">
                            <h3 className="product-name">Bluetooth Speaker</h3>
                            <p className="product-price">$49</p>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://logitech.onlinesalestore.pk/cdn/shop/files/logitech-g502-hero-gaming-mouse-logitech-pakistan-official_medium.png?v=1695043399" alt="Product 4" />
                        </div>
                        <div className="product-info">
                            <h3 className="product-name">Gaming Mouse</h3>
                            <p className="product-price">$35</p>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Cart