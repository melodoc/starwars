import React, { useState } from 'react';

import './character.css';

export const Character = ({ character, onClick }) => {
  const { id, releaseDate, description } = character;
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

  return (
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
