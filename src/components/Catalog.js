import React from 'react';
import Product from './Product';

function Catalog({ products }) {
  return (
    <div className="catalog-container">
      <aside>Catalog</aside>
      <div className="products-container">
        {products.map((product) => {
          const { id, category, description, image, price, title } = product;
          return (
            <Product
              key={id}
              id={id}
              category={category}
              description={description}
              image={image}
              price={price}
              title={title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Catalog;
