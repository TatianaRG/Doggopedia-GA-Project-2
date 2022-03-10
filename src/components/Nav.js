import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ search, setSearch }) => {
  return (
    <header>
      <nav className="navbar has-background-grey">
        <div className="container">
          <div className="navbar-menu ">
            <Link to="/" className="navbar-item is-white">
              Home
            </Link>
            <Link to="/dogs " className="navbar-item">
              Index
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
