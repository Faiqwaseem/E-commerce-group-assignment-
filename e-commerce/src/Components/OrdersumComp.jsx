import React, { useContext } from "react";
import ProductContext from "../Context/ProductContext";
import DeleteIcon from '@mui/icons-material/Delete';
const OrdersumComp = () => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } =
    useContext(ProductContext);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="cart-container">
      <h2>Your Shopping Cart</h2>

      <div className="cart-items">
        {cartItems.length === 0 && <p>No items in cart.</p>}
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <div className="item-details">
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <div className="quantity">
                <button
                  className="qty-btn minus"
                  onClick={() => decreaseQty(item.id)}
                >
                  -
                </button>
                <input type="number" value={item.quantity} readOnly />
                <button
                  className="qty-btn plus"
                  onClick={() => increaseQty(item.id)}
                >
                  +
                </button>
              </div>
            </div>
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
             <DeleteIcon />
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Order Summary</h3>
        <p>
          Subtotal: <span id="subtotal">${subtotal.toFixed(2)}</span>
        </p>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </section>
  );
};

export default OrdersumComp;
