import React, { useState } from 'react'
import './input.css'
export default function Input({quantity, setQuantity}) {
  const [alert, setAlert] = useState({show: false, message: ''});

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    setAlert({show: false, message: ''});
  };

  const handleDecrease = () => {
    if (quantity > 20) {
      setQuantity(prevQuantity => prevQuantity - 1);
    } else {
      setAlert({show: true, message: 'Quantity cannot be less than 20'});
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if (value !== '' && !isNaN(value)) {
      setQuantity(Number(value));
      setAlert({show: false, message: ''});
    }
  };

  return (
    <>


<div className='set-quantity'>
      <h6>Quantity</h6>
</div>


    <div className='set-input'>
      <button onClick={handleDecrease}>-</button>
      <input type="text" value={quantity} onChange={handleChange} pattern="\d*" />
      <button onClick={handleIncrease}>+</button>
      </div>
      <div className='set-alert'>
        {alert.show && <div className="alert alert-dark" role="alert">{alert.message}</div>}
        </div>
        </>
  )
}