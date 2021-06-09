import React from 'react';

function ProductInCart({
  product,
  deleteProduct,
  incrementQuantity,
  decrementQuantity,
  setQuantity,
}) {
  const { title, price, image, id, quantity } = product;
  return (
    <div className="cart-wrapper">
      <div key={id} className="product-card-wrapper">
        <div className="main-section">
          {' '}
          <img src={image} alt={title} />
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
        </div>
        <h4>{title}</h4>
        <h3>Price: {price}</h3>
        <h3>Quantity: {quantity}</h3>
        <button onClick={() => deleteProduct(id)} className="delete-btn">
          DELETE
        </button>
      </div>
    </div>
  );
}

export default ProductInCart;
