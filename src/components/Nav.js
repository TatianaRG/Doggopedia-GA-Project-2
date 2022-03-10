import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ search, setSearch }) => {
  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <header>
      <nav className='navbar has-background-light'>
        <div className='container'>
          <div className='navbar-menu '>
            <Link to='/' className='navbar-item'>
              Home
            </Link>
            <Link to='/dogs ' className='navbar-item'>
              Index
            </Link>
            <div className='field has-addons'>
              <div className='control'>
                <input
                  onChange={handleChange}
                  className='input is-rounded is-medium'
                  type='text'
                  placeholder='Search for breed'
                  value={search}
                  //   value={props.inputValue}
                  //   onChange={props.dogFilterOnChange}
                />
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
