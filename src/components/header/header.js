import React from 'react';
import { Menu } from '../menu/menu';
import { Logo } from '../logo/logo';

import './header.css';

export const Header = () => {
  return (
    <header>
      <nav className="nav">
        <Logo />
        <Menu />
      </nav>
    </header>
  );
};
