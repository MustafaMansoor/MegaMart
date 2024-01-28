import React from "react";

export default function ItemCard({name,quantity,price, images}) {
  if (!name) {
    return null;
  }
  return (
    <div>
      <p>
      {name} {quantity} {price} {images}
      </p>
    </div>
  );
}
