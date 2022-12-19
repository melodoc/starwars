import React, { useEffect, useState } from 'react';

import { Card } from '../../components/card';
import { StarshipCard } from '../../components/starship-card';
import { Loader } from '../../components/loader';
import { api } from '../../api';
import { CardsEnum } from '../../constants';

import './starship.css';

export const Starship = () => {
  const [starship, setStarship] = useState(null);
  const [currentStarship, setCurrentStarship] = useState(null);

  useEffect(() => {
    api
      .getStarshipList()
      .then((data) => {
        setStarship(data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleOnClick = (id) => {
    api
      .getStarshipById(id)
      .then((data) => {
        setCurrentStarship(data.result);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <h2 className="episode-select">Starship</h2>
      {currentStarship && <StarshipCard card={currentStarship.properties} />}
      <article className="starship">
        {starship ? (
          starship.map((character) => {
            return (
              <Card
                key={character.uid}
                type={CardsEnum.CHARACTERS}
                card={{
                  id: character.uid,
                  description: character.name
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
