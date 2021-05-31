import React from 'react';

function Cart({ productsInCart }) {
  return (
    <div className="cart-container">
      <h1>MY SHOPPING CART</h1>
      <div className="cart-wrapper">
        {productsInCart.map((item) => {
          const { title, price, image, id } = item;
          return (
            <div key={id} className="cart-product-card">
              <img src={image} alt={title} />
              <h4>{title}</h4>
              <h3>{price}</h3>
              <button className='delete-btn'>DELETE </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
