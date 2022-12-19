import React from 'react';
import logo from './../../assets/images/icons/star-wars.svg';

import './logo.css';

export const Logo = () => {
  return (
    <a href=".">
      <img
        className="menu-header-logo"
        src={logo}
        alt="Star wars logo"
      />
    </a>
  );
};
