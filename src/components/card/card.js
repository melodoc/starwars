import React from 'react';

import './card.css';

export const Card = ({ card, onClick }) => {
  const { id, releaseDate, description, title, episode } = card;

  const handleOnClick = () => {
    onClick(id);
  };

  const descriptionClassName = `card-item ${!title ? 'card-background' : ''}`;

  return (
    <div className={descriptionClassName} onClick={handleOnClick}>
      {releaseDate && (
        <time className="card-year content" dateTime={releaseDate}>
          {releaseDate}
        </time>
      )}
      {title && (
        <p className="card-name content">
          {title}. Episode {episode}
        </p>
      )}
      <p className="card-description content">{description}</p>
    </div>
  );
};
