import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
// import uniqid from 'uniqid';

function App() {
  const [products, setProducts] = useState();
  const [productsInCart, setProductsInCart] = useState([]);

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

  const addProduct = (id) => {
    // Получить выбранный элемент
    const newProduct = products.filter((product) => product.id === id);

    // Если корзина пустая, добавить элемент в корзину
    if (productsInCart.length === 0) {
      setProductsInCart([newProduct[0]]);
    } else {
      isProductInCart(id)
        ? incrementQuantity(id)
        : addNewProductToCart(newProduct);
    }
  };

  // Если корзина не пустая, то :
  // 1. Проверить, есть ли уже такой элемент в корзине
  const isProductInCart = (id) => {
    return productsInCart.some((product) => product.id === id);
  };

  // 2. Если есть, то найти этот элемент в корзине и обновить его количество, а не добавлять дубликат в корзину
  const incrementQuantity = (id) => {
    setProductsInCart(
      productsInCart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };
  // 3. Если нет, добавить новый элемент в корзину
  const addNewProductToCart = (product) => {
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
                productsInCart={productsInCart}
                deleteProduct={deleteProduct}
              />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
