import React from 'react';
import { NavLink } from 'react-router-dom';
import cartIcon from '../assets/shopping-cart-solid.svg';

function Header({ ammountOfProducts }) {
  return (
    <nav>
      <h2>FakeStore</h2>
      <ul className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/cart">
          <img className="cart-icon" src={cartIcon} alt="" />
          <span className="cart-icon-circle">
            {ammountOfProducts > 0 ? `${ammountOfProducts}` : '0'}
          </span>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Header;
