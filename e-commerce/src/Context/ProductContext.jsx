import React, { createContext, useState } from "react";
import Swal from 'sweetalert2'

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ add to cart
  const addToCart = (item) => {
    const getData = localStorage.getItem('newUser')
    if (!getData) {
      alert("Please Log in Your Account")
      return;
    }
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
  // ✅ Proceed checkout

  const ProceedTocheckout = () => {
    if (cartItems.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You didn't buy anything!",
      });
    }
    else if (cartItems) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "Do you want to buy something!",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "yes",
        cancelButtonText: "No",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          setCartItems([])
          swalWithBootstrapButtons.fire({
            title: "Your order has been successful!",
            icon: "success"
          });

        }
        // else if (
        /* Read more about handling dismissals below */
        //   result.dismiss === Swal.DismissReason.cancel
        // ) {
        //   swalWithBootstrapButtons.fire({
        //     title: "Cancelled",
        //     icon: "error"
        //   });
        // }
      });
    }
  }


  return (
    <ProductContext.Provider
      value={{ cartItems, addToCart, removeFromCart, increaseQty, decreaseQty, ProceedTocheckout }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
