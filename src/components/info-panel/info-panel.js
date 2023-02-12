import React from 'react';

import './info-panel.css';

export const InfoPanel = ({ currentFilm }) => {

  if (currentFilm?.properties) {
    const film = currentFilm.properties;
    return (
      <div>
        <section className="episode">
          <h1 className="episode-number">Episode {film?.episode_id}</h1>
          <h2 className="episode-title">{film?.title}</h2>
          <p className="episode-description">{film?.opening_crawl}</p>
        </section>
        <section className="date">
          <h2 className="date-title">Release date</h2>
          <p className="date-description">{film?.release_date}</p>
        </section>
        <section className="info">
          <p className="info-title">Director: {film?.director}</p>
          <p className="info-title">Producer: {film?.producer}</p>
        </section>
        <h2 className="title">See details about other episodes</h2>
      </div>
    );
  }
  return <h2 className="episode-select">Episodes are loading...</h2>;
};
