import React from 'react';

function Product({ product, addProduct }) {
  const { id, description, image, price, title } = product;
  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img src={image} alt={title} />
      </div>
      <h4>{title}</h4>
      <h4>${price}</h4>
      <button onClick={() => addProduct(id)} className="add-btn">
        Add To Cart
      </button>
    </div>
  );
}

export default Product;
