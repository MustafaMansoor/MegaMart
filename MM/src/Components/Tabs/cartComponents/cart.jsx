import React from "react";
import "./Cart.css";
import ItemCard from "./itemcard"
export default function Cart({ isOpen, toggleCart, items }) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="cart-backdrop" onClick={toggleCart} />
      <div className="cart-panel">
        <h3>Cart Panel Content</h3>
        {items.length > 0 ? (
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <ItemCard 
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                images={item.images}
                
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </>
  );
}
