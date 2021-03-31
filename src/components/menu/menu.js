import React from "react";
import "./menu.css";

function Menu() {
  return (
    <ul className="menu-nav">
      <li>
        <a className="menu-link" href="index.html">
          Билеты
        </a>
      </li>
      <li>
        <a className="menu-link" href="index.html">
          О фильме
        </a>
      </li>
      <li>
        <a className="menu-link" href="index.html">
          Трейлеры
        </a>
      </li>
      <li>
        <a className="menu-link" href="index.html">
          Обратная связь
        </a>
      </li>
    </ul>
  );
}

export default Menu;
