import React from 'react';
import trashIcon from '../assets/trash-solid.svg';

function ProductInCart({
  product,
  deleteProduct,
  incrementQuantity,
  decrementQuantity,
  setQuantity,
}) {
  const { title, price, image, id, quantity } = product;
  const subTotal = price * quantity;
  return (
    <div key={id} className="product-card-wrapper">
      <div className="image-wrapper-product-card">
        {' '}
        <img src={image} alt={title} />
      </div>
      <h4>{title}</h4>
      <div className="quantity-form">
        <button
          onClick={() => decrementQuantity(id)}
          className="btn-change-quantity"
        >
          -
        </button>
        <input
          onChange={(e) => setQuantity(e, id)}
          value={quantity}
          type="text"
          name=""
          id={id}
        />
        <button
          onClick={() => incrementQuantity(id)}
          className="btn-change-quantity"
        >
          +
        </button>
      </div>
      <h3>{price}</h3>
      <h3>{subTotal.toFixed(2)}</h3>

      <img
        onClick={() => deleteProduct(id)}
        className="delete-btn"
        src={trashIcon}
        alt=""
      />
    </div>
  );
}

export default ProductInCart;
