import React, { useState } from "react";
import Navbar from "./Components/Navbar/nav";
import Items from "./Components/Items/index";
import Product from "./Components/Items/Product/product";
import Cart from "./Components/Tabs/cartComponents/cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((prevItem) => prevItem.id === item.id);
  
      if (existingItem) {
        return prevItems.map((prevItem) =>
          prevItem.id === item.id
            ? { ...prevItem, quantity: prevItem.quantity + item.quantity }
            : prevItem
        );
      } else {
        return [...prevItems, item];
      }
    });
  };
  const updateCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((prevItem) => prevItem.id === item.id);
  
      if (existingItem) {
        return prevItems.map((prevItem) =>
          prevItem.id === item.id
            ? { ...prevItem, quantity: item.quantity }
            : prevItem
        );
      } else {
        return [...prevItems, item];
      }
    });
  }

  const removeFromCart = (itemId) => {
    console.log("Item ID to be removed:", itemId);
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((prevItem) => {
        console.log("Comparing:", prevItem.id, itemId);
        return prevItem.id !== itemId;
      });
      console.log("Updated items after removal:", updatedItems);
      return updatedItems;
    });
  };
  

  return (
    <Router>
      <Navbar toggleCart={toggleCart} />
      <div style={{ marginTop: "100px" }}>
        <Routes>
          <Route
            path="/"
            element={<Items/>}
          />
          <Route
            path="/product/:id"
            element={<Product addToCart={addToCart}  />}
          />
        </Routes>
      </div>
      <Cart isOpen={isCartOpen} toggleCart={toggleCart}
       items={cartItems}
      removeFromCart={removeFromCart} 
      updateCartQuantity={updateCart}/>
    </Router>
  );
}

export default App;