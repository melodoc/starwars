import React, { useState } from 'react';

import { CardsEnum } from '../../constants';

import './card.css';

export const Card = ({ type, card, onClick }) => {
  const { id, releaseDate, description, title, episode } = card;
  const [detailsVisibility, setDetailsVisibility] = useState(false);

  const handleOnClick = () => {
    onClick(id);
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
  };

  const handleMouseEvent = () => {
    setDetailsVisibility(!detailsVisibility);
  };

  return type === CardsEnum.MOVIE ? (
    <div className="card-item" onClick={handleOnClick}>
      <time className="card-year content" dateTime={releaseDate}>
        {releaseDate}
      </time>
      <p className="card-name content">
        {title}. Episode {episode}
      </p>
      <p className="card-description content">{description}</p>
    </div>
  ) : (
    <div
      className="card-item card-characters"
      onClick={handleOnClick}
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
    >
      <time className="card-year content" dateTime={releaseDate}>
        {releaseDate}
      </time>
      <p className="card-name character content">{description}</p>
      {detailsVisibility && (
        <a className="card-link content" href="." onClick={handleLinkClick}>
          View details
        </a>
      )}
    </div>
  );
};
