import React from "react";
import { useState } from "react";
import "./Cart.css";
import ItemCard from "./itemCart";

export default function Cart({ isOpen, toggleCart, items, removeFromCart, updateCartQuantity }) {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) {
    return null;
  }

  const total = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <>
      <div className="cart-backdrop" onClick={toggleCart} />
      <div className="cart-panel">
        {items.length > 0 ? (
          <>
            <ol>
              {items.map((item, index) => (
                <li key={index}>
                  <ItemCard
                    item={item}
                    removeFromCart={removeFromCart}
                    updateCart={updateCartQuantity}
                  />
                </li>
              ))}
            </ol>
            <p>Total Price: R S.{total}</p>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </>
  );
}
