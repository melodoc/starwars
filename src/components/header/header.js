import React from "react";
import "./header.css";
import Menu from "./../menu/menu";
import Logo from "./../logo/logo";

function Header() {
  return (
    <header>
      <nav className="nav">
        <Logo />
        <Menu />
      </nav>
    </header>
  );
}

export default Header;
