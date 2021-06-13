import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

function Catalog({ products }) {
  const [newProductsArr, setNewProductsArr] = useState();
  const [currentCategory, setCurrentCategory] = useState('All');

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

    setCurrentCategory(event.target.innerText);
  };

  return (
    <div className="catalog-wrapper">
      <div className="catalog-header"></div>
      <div className="catalog-container">
        <ul className="categories-container">
          <li
            style={
              currentCategory === 'All'
                ? {
                    borderColor: '#ff8989',
                    backgroundColor: 'transparent',
                    color: '#222',
                  }
                : null
            }
            onClick={filterProducts}
          >
            All
          </li>
          <li
            style={
              currentCategory === `Men's clothing`
                ? {
                    borderColor: '#ff8989',
                    backgroundColor: 'transparent',
                    color: '#222',
                  }
                : null
            }
            onClick={filterProducts}
          >
            Men's clothing
          </li>
          <li
            style={
              currentCategory === 'Jewelery'
                ? {
                    borderColor: '#ff8989',
                    backgroundColor: 'transparent',
                    color: '#222',
                  }
                : null
            }
            onClick={filterProducts}
          >
            Jewelery
          </li>
          <li
            style={
              currentCategory === 'Electronics'
                ? {
                    borderColor: '#ff8989',
                    backgroundColor: 'transparent',
                    color: '#222',
                  }
                : null
            }
            onClick={filterProducts}
          >
            Electronics
          </li>
          <li
            style={
              currentCategory === `Women's clothing`
                ? {
                    borderColor: '#ff8989',
                    backgroundColor: 'transparent',
                    color: '#222',
                  }
                : null
            }
            onClick={filterProducts}
          >
            Women's clothing
          </li>
        </ul>
        <div className="products-container">
          {newProductsArr &&
            newProductsArr.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Catalog;
