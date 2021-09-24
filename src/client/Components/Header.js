import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light border">
      <a className="navbar-brand" href="/">
        Onassis
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/products">
            Products
          </Link>
          <Link className="nav-item nav-link" to="/services">
            Services
          </Link>
        </div>
      </div>
      <div className="collapse navbar-collapse justify-content-end">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/booking">
            Book A Service
          </Link>
          <Link className="nav-item nav-link" to="/booking">
            Account
          </Link>
          <Link className="nav-item nav-link" to="/checkout">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
