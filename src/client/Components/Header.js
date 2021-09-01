import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>Header</h1>
      <a href="/">Logo Here</a>
      <Link to="/products">Products</Link>
      <Link to="/services">Services</Link>
      <Link to="/booking">Booking</Link>
      <Link to="/checkout">Checkout</Link>
    </div>
  );
}

export default Header;
