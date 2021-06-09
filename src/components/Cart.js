import React from 'react';
import ProductInCart from './ProductInCart';

function Cart({
  productsInCart,
  deleteProduct,
  totalCost,
  incrementQuantity,
  decrementQuantity,
  setQuantity,
}) {
  return (
    <div className="cart-container">
      <h1>MY SHOPPING CART</h1>
      {productsInCart.map((product) => {
        return (
          <ProductInCart
            key={product.id}
            product={product}
            deleteProduct={deleteProduct}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            setQuantity={setQuantity}
          />
        );
      })}
      <h2>Total: ${totalCost} </h2>
    </div>
  );
}

export default Cart;
