import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <nav>
        <div className='container'>
          <div className='navbar-brand is-mobile '>
            <Link to='/' className='navbar-item is-white'>
              <span className='icon'>
                <i className='fas fa-home has-text-white'></i>
              </span>
              <p className='fontstyling'>Home</p>
            </Link>
            <Link to='/dogs ' className='navbar-item is-white'>
              <span className='icon'>
                <i className='fas fa-book-open has-text-white'></i>
              </span>
              <p className='fontstyling'>Index</p>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
