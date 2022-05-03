import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header>

      <nav className="navbar has-background-grey ">
        <div className="container">
          <div className="navbar-brand is-mobile ">
            <Link to="/" className="navbar-item is-white">
              Home
            </Link>
            <Link to="/dogs " className="navbar-item is-white">

              Index
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
