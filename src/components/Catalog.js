import React, { useState, useEffect } from 'react';
import Product from './Product';

function Catalog({ products, addProduct }) {
  const [newProductsArr, setNewProductsArr] = useState();

  useEffect(() => {
    setNewProductsArr(products);
  }, [products]);

  const filterProducts = (event) => {
    setNewProductsArr(
      event.target.innerText === 'All'
        ? products
        : products.filter(
            (product) =>
              product.category === event.target.innerText.toLowerCase()
          )
    );
  };

  return (
    <div className="catalog-container">
      <aside>
        <h1>Catalog</h1>
        <ul className="categories-container">
          <li onClick={filterProducts}>All</li>
          <li onClick={filterProducts}>Men's clothing</li>
          <li onClick={filterProducts}>Jewelery</li>
          <li onClick={filterProducts}>Electronics</li>
          <li onClick={filterProducts}>Women's clothing</li>
        </ul>
      </aside>
      <div className="products-container">
        {newProductsArr &&
          newProductsArr.map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                addProduct={addProduct}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Catalog;
