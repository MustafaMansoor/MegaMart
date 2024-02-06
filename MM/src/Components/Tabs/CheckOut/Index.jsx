import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';

export default function Checkout({ cartItems }) {
  const { price } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const orderData = {
      products: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      user: { name, email, address },
      status: 'Pending',
      totalPrice: price
    };
    
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
      });
      
      if (response.ok) {
        alert('Order placed successfully');
      } else {
        alert('Failed to place order');
        
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="order-form">
      <h2 style={{textAlign:'center', marginBottom: "20px "}}>Order Details</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="user-details">
          <h3>User Details</h3>
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
            <span className="total-price">{price}</span>
          </div>
        </div>
        <div className="item-details">
          <h3>Item Details</h3>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>Price: {item.price}</p>
            </div>
          ))}
          
        <button type="submit" className="submit-button">Place Order</button>
        </div>
      </form>
    </div>
  );
}
