import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <nav className="navbar has-background-light">
        <div className="container">
          <div className="navbar-menu ">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/dogs " className="navbar-item">
              Index
            </Link>
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input is-rounded is-medium"
                  type="text"
                  placeholder="Search for breed"
                />
              </div>
              <div className="control">
                <a className="button is-grey is-rounded is-medium">Search</a>
              </div>
            </div>
            ;
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
