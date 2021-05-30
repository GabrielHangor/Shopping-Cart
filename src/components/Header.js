import React from 'react';
import { NavLink } from 'react-router-dom';

function Header({ ammountOfProducts }) {
  return (
    <nav>
      <img src="" alt="" />
      <ul className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/cart">
          Cart
          {ammountOfProducts > 0 ? `: ${ammountOfProducts}` : null}
        </NavLink>
      </ul>
    </nav>
  );
}

export default Header;
