import React from 'react';

function Product({ id, category, description, image, price, title }) {
  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img src={image} alt={title} />
      </div>
      <h4>{title}</h4>
      <h4>${price}</h4>
    </div>
  );
}

export default Product;
