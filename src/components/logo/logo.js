import React from "react";
import logo from './../../assets/images/icons/logo.png'
import "./logo.css";

function Logo() {
  return (
    <a href="index.html">
      <img
        className="menu-header-logo"
        src={logo}
        alt="Логотип киноэпопеи «Звездные войны»"
        width="135"
        height="40"
      />
    </a>
  );
}

export default Logo;
