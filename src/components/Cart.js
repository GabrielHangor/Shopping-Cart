import ProductInCart from './ProductInCart';
import React, { useState } from 'react';

function Cart({
  productsInCart,
  deleteProduct,
  totalCost,
  incrementQuantity,
  decrementQuantity,
  setQuantity,
  clearCart,
}) {
  const [isCheckout, setisCheckout] = useState(false);

  const proceedToCheckout = () => {
    clearCart();
    setisCheckout(true);
    setTimeout(() => {
      setisCheckout(false);
    }, 2000);
  };

  return (
    <div className="cart-container">
      <h1>Cart</h1>

      <div className="cart-header">
        <div className=""></div>
        <h3>Product</h3>
        <h3>Quantity</h3>
        <h3>Price</h3>
        <h3>Subtotal</h3>
        <div className=""></div>
      </div>
      <div className="cart-wrapper">
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
      </div>

      {isCheckout ? (
        <div className="checkout-message">Thank You For Your Purchase</div>
      ) : (
        <div className="totalcost-card">
          <h1>Total: ${totalCost} </h1>
          {productsInCart.length > 0 ? (
            <button onClick={() => proceedToCheckout()} className="add-btn">
              Proceed To Chechout
            </button>
          ) : (
            <h2>Cart Is Empty</h2>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;
