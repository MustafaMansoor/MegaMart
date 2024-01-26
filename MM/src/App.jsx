import React, { useState } from "react";
import Navbar from "./Components/Navbar/nav";
import Items from "./Components/Items/index";
import Product from "./Components/Items/Product/product";
import Cart from "./Components/Tabs/cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <Router>
      <Navbar toggleCart={toggleCart} />
      <div style={{ marginTop: "100px" }}>
        <Routes>
          <Route
            path="/"
            element={<Items addToCart={addToCart} />}
          />
          <Route
            path="/product/:id"
            element={<Product addToCart={addToCart} />}
          />
        </Routes>
      </div>
      <Cart isOpen={isCartOpen} toggleCart={toggleCart} items={cartItems} />
    </Router>
  );
}

export default App;
