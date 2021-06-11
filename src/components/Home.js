import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h4>Shopping is fun</h4>
          <h1>BROWSE OUR PREMIUM PRODUCTS</h1>
          <h2>2021 Collection</h2>
        </div>
        <Link className="shop-btn" to="/catalog">
          Browse Now
        </Link>
      </div>
    </div>
  );
}

export default Home;
