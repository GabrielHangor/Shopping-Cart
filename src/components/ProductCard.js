import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const { image, price, title } = product;
  return (
    <Link
      to={{
        pathname: `/catalog/${title}`,
        state: product,
      }}
    >
      <div className="product-card">
        <div className="image-wrapper">
          <img src={image} alt={title} />
        </div>

        <div className="product-card-text-content">
          <h4>{title}</h4>
          <h3>${price}</h3>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
