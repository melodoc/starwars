import React, { useEffect, useState } from 'react';

import { Card } from '../../components/card';
import { Loader } from '../../components/loader';
import { InfoPanel } from '../../components/info-panel/info-panel';
import { CardsEnum } from '../../enums';
import { StarWarsApiService } from '../../api';

import './episodes.css';

export const Episodes = () => {
  const [films, setFilms] = useState(null);
  const [currentFilm, setCurrentFilm] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await StarWarsApiService.getFilmsList();
        if (mounted) {
          setFilms(data.result);
          setCurrentFilm(data.result[0]);
        }
      } catch (err) {
        console.error(err);
      }
    })();
    return () => (mounted = false);
  }, []);

  const handleOnClick = (id) => {
    const selectedFilm = films.find((film) => film._id === id);
    setCurrentFilm(selectedFilm);
  };

  return (
    <>
      <InfoPanel currentFilm={currentFilm} />
      <article className="card">
        {films ? (
          films.map((film) => {
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
        ) : (
          <Loader />
        )}
      </article>
    </>
  );
};
