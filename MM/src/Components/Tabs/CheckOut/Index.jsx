import React, { useState } from 'react';
import './index.css'; // Assuming you've created a CSS file named OrderForm.css

export default function OrderForm({ totalPrice }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const orderData = {
      products: [],
      user: { name, email, address },
      totalPrice,
      status: 'Pending',
    };
    console.log(orderData);
    // Code to send order data to backend or handle it as needed
  };

  return (
    <div className="order-form">
      <h2>Order Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div>
          <label>Total Price:</label>
          <span className="total-price">{totalPrice}</span>
        </div>
        <button type="submit" className="submit-button">Place Order</button>
      </form>
    </div>
  );
}
