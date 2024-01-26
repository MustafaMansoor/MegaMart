// index.jsx
import React, { useEffect, useState } from 'react';
import './items.css';
import ItemCard from './itemCard';

export default function Index() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/v1/products');
        const data = await response.json();
       
        setProducts(data.products); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getdata();
  }, []);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div className="col mb-4" key={product.itemId}>
            <ItemCard
            productId={product.itemId}
              itemName={product.itemName}
              price={product.price}
              images={product.images}
              description={product.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
