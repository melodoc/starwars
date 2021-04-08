import React from "react";
import "./trailer-button.css";

function TrailerButton() {
  return (
    <section className="trailer">
      <a
        className="trailer-button"
        href="https://www.youtube.com/watch?v=KVRBfWQgyuY"
        data-fancybox
      >
        Смотреть трейлер
      </a>
    </section>
  );
}

export default TrailerButton;
