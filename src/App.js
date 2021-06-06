import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';

function App() {
  const [products, setProducts] = useState();
  const [productsInCart, setProductsInCart] = useState([]);
  const [totalCost, setTotalCost] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(
        data.map((product) => {
          return { ...product, quantity: 1 };
        })
      );
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    setTotalCost(
      productsInCart.reduce((a, b) => {
        return a + b.price * b.quantity;
      }, 0)
    );
  }, [productsInCart]);

  const addProduct = (id) => {
    const newProduct = products.filter((product) => product.id === id);

    if (productsInCart.length === 0) {
      setProductsInCart([newProduct[0]]);
    } else {
      isProductInCart(id)
        ? incrementQuantity(id)
        : addNewProductInCart(newProduct);
    }
  };

  const isProductInCart = (id) => {
    return productsInCart.some((product) => product.id === id);
  };

  const incrementQuantity = (id) => {
    setProductsInCart(
      productsInCart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const addNewProductInCart = (product) => {
    setProductsInCart([...productsInCart, ...product]);
  };

  const deleteProduct = (id) => {
    setProductsInCart(productsInCart.filter((product) => product.id !== id));
  };

  return (
    <BrowserRouter>
      <div className="main-container">
        <Header ammountOfProducts={productsInCart.length} />
        <Switch>
          <Route path="/" exact component={Home} />
          {products && (
            <Route
              path="/catalog"
              exact
              render={() => (
                <Catalog products={products} addProduct={addProduct} />
              )}
            />
          )}
          <Route
            path="/cart"
            exact
            render={() => (
              <Cart
                totalCost={totalCost}
                productsInCart={productsInCart}
                deleteProduct={deleteProduct}
              />
            )}
          />
          <Route path="/catalog/:title" component={ProductDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
