import React, { createContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // ✅ add to cart
    const addToCart = (item) => {
        
        setCartItems((prev) => {
            // check if already exists
            const existing = prev.find((p) => p.id === item.id);
            if (existing) {
                // increase quantity if exists
                return prev.map((p) =>
                    p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            } else {
                // new item with quantity 1
                return [...prev, { ...item, quantity: 1 }];
            }
        });
    };

    // ✅ remove one completely
    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    // ✅ increase qty
    const increaseQty = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // ✅ decrease qty
    const decreaseQty = (id) => {
        setCartItems((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    const newQty = item.quantity - 1;
                    return newQty > 0 ? { ...item, quantity: newQty } : item;
                }
                return item;
            })
        ).filter((item) => item.quantity > 0); // remove if qty 0
    };

    return (
        <ProductContext.Provider
            value={{ cartItems, addToCart, removeFromCart, increaseQty, decreaseQty }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;
