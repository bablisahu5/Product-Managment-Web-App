import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Shopper</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/" className={menu === "shop" ? "active" : ""}>Shop</Link>
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens" className={menu === "mens" ? "active" : ""}>Men</Link>
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="/womens" className={menu === "womens" ? "active" : ""}>Women</Link>
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids" className={menu === "kids" ? "active" : ""}>Kids</Link>
        </li>
      </ul>

      <div className="nav-auth-buttons">
        <button className="btn login-btn">Login</button>
        <button className="btn signup-btn">Signup</button>
      </div>
    </div>
  );
};

export default Navbar;
