import React from "react";
import "./logo.css";

function Logo() {
  return (
    <a href="index.html">
      <img
        className="menu-header-logo"
        src="../../assets/images/icons/logo.svg"
        alt="Логотип киноэпопеи «Звездные войны»"
        width="135"
        height="40"
      />
    </a>
  );
}

export default Logo;
