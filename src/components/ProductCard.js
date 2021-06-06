import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product, addProduct }) {
  const { id, image, price, title } = product;
  return (
    <div className="product-card">
      <Link
        to={{
          pathname: `/catalog/${title}`,
          state: product,
        }}
      >
        <div className="image-wrapper">
          <img src={image} alt={title} />
        </div>
      </Link>
      <h4>{title}</h4>
      <h4>${price}</h4>
      <button onClick={() => addProduct(id)} className="add-btn">
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;
