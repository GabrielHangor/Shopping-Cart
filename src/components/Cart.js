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
      <div className="totalcost-card">
        <h1>Total: ${totalCost} </h1>
        <button className="add-btn">Proceed To Chechout</button>
      </div>
    </div>
  );
}

export default Cart;
