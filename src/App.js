import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <BrowserRouter>
      <div className="main-container">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          {products && (
            <Route
              path="/catalog"
              exact
              render={() => <Catalog products={products} />}
            />
          )}
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
