import React from 'react';

import './info-panel.css';

export const InfoPanel = ({ currentFilm }) => {
  if (currentFilm) {
    return (
      <>
        <section className="episode">
          <h1 className="episode-number">Episode {currentFilm.properties.episode_id}</h1>
          <h2 className="episode-title">{currentFilm.properties.title}</h2>
          <p className="episode-description">{currentFilm.properties.opening_crawl}</p>
        </section>
        <section className="date">
          <h2 className="date-title">Release date</h2>
          <p className="date-description">{currentFilm.properties.release_date}</p>
        </section>
        <section className="info">
          <p className="info-title">Director: {currentFilm.properties.director}</p>
          <p className="info-title">Producer: {currentFilm.properties.producer}</p>
        </section>
        <h2 className="title">See details about other episodes</h2>
      </>
    );
  }
  return <h2 className="episode-select">Episodes are loading...</h2>;
};
