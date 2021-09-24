import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="row bg-white text-center">
        <div className="col mt-4">
          <ul className="list-unstyled">
            <li>Onassis Studio</li>
            <li>615 Vanderbilt Avenue,</li>
            <li>Brooklyn NY 11238</li>
            <li>000-000-000</li>
          </ul>
        </div>
        <div className="col mt-4">
          <ul className="list-unstyled">
            <li>Hours:</li>
            <li>T - Th: 11am to 8pm</li>
            <li>F - Sun: 10am to 7pm</li>
          </ul>
        </div>
      </div>
      <div className="row-fluid d-flex flex-wrap m-1">
        <div className="col d-flex justify-content-center">
          <Link className="nav-item nav-link text-dark">About</Link>
          <Link className="nav-item nav-link text-dark">FAQ</Link>
          <Link className="nav-item nav-link text-dark">Terms of Service</Link>
          <Link className="nav-item nav-link text-dark">Privacy Policy</Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
