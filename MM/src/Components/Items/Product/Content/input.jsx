import React, { useState } from 'react';
import './input.css'
export default function Input() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if (value !== '' && !isNaN(value)) {
      setQuantity(Number(value));
    }
  };

  return (
    <div className='set-input'>
      <h5>Q U A N T I T Y</h5>
      
      <button onClick={handleDecrease}>-</button>
      <input
        type="text"
        value={quantity}
        onChange={handleChange}
        pattern="[0-9]*"
      />
      <button onClick={handleIncrease}>+</button>
    </div>
  );
}
