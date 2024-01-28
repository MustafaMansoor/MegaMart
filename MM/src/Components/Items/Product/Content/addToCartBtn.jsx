import React from 'react';

const AddToCartBtn = ({ itemName, price, selectedQuantity, addToCart,images }) => {
  const handleAddToCart = () => {
    addToCart({ name: itemName, price, quantity: selectedQuantity,images });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button type="button" className="btn btn-dark" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartBtn;
