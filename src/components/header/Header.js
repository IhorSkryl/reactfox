import React from 'react';
import Navigation from '../navigation/Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className='header__container'>
        <div className="header__logo">
          <Link to="/" className="header__logo-link">
            Logo
          </Link>
        </div>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
