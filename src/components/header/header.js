import React from "react";
import "./header.css";
import { Menu } from "./../menu/menu";
import { Logo } from "./../logo/logo";

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
