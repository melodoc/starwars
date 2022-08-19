import React from "react";
import "./card.css";

export const Card = () => {
  return (
    <div className="slider-card-item">
      <figure>
        <img
          className="slider-card-image"
          src="public/remote-assetscard_4.png"
          alt=""
          width="207"
          height="166"
        />
      </figure>
      <time className="slider-card-year content" datetime="1977">
        1977
      </time>
      <p className="slider-card-name content">
        Эпизод IV:
        <br />
        Новая надежда
      </p>
      <p className="slider-card-rating content">8.11</p>
    </div>
  );
}
