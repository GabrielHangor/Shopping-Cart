import React from 'react';

function Cart({ productsInCart, deleteProduct, totalCost }) {
  return (
    <div className="cart-container">
      <h1>MY SHOPPING CART</h1>
      <div className="cart-wrapper">
        {productsInCart.map((item) => {
          const { title, price, image, id, quantity } = item;
          return (
            <div key={id} className="cart-product-card">
              <img src={image} alt={title} />
              <h4>{title}</h4>
              <h3>{price}</h3>
              <button onClick={() => deleteProduct(id)} className="delete-btn">
                DELETE
              </button>
              <h3>Quantity: {quantity}</h3>
            </div>
          );
        })}
      </div>
      <h2>Total: {totalCost} </h2>
    </div>
  );
}

export default Cart;
