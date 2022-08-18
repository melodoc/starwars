import React, { useEffect, useState } from 'react';

import { Card } from '../../components/card';
import { InfoPanel } from '../../components/info-panel/info-panel';
import { CardsEnum } from '../../constants';
import { api } from '../../api';

import './episodes.css';

export const Episodes = () => {
  const [films, setFilms] = useState(null);
  const [currentFilm, setCurrentFilm] = useState(null);

  useEffect(() => {
    api
      .getFilmsList()
      .then((data) => {
        setFilms(data.result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleOnClick = (id) => {
    const selectedFilm = films.find((film) => film._id === id);
    setCurrentFilm(selectedFilm);
  };

  return (
    <>
      <InfoPanel currentFilm={currentFilm} />
      <article className="card">
        {films
          ? films.map((film) => {
              return (
                <Card
                  key={film._id}
                  type={CardsEnum.MOVIE}
                  card={{
                    id: film._id,
                    releaseDate: film.properties.release_date,
                    description: film.properties.opening_crawl,
                    title: film.properties.title,
                    episode: film.properties.episode_id
                  }}
                  onClick={handleOnClick}
                />
              );
            })
          : 'Loading...'}
      </article>
    </>
  );
};
