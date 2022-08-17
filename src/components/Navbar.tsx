import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }: any) => {
  return (
    <nav className='navbar navbar-light bg-dark'>
      <div className='container-fluid'>
        <div className='navbar-brand text-white'>
          <i className={icon}></i>
          <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
            {title}
          </Link>
        </div>
        <div style={{ display: 'flex' }}>
          <Link to='/' className='a nav-link' style={{ color: 'white' }}>
            Home
          </Link>
          <Link to='/about' className='a nav-link' style={{ color: 'white' }}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github px-2',
};

Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Navbar;
