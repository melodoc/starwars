import React, { useEffect, useState } from 'react';

import { Card } from '../../components/card';
import { DetailedCard } from '../../components/detailed-card';
import { Loader } from '../../components/loader';
import { api } from '../../api';
import { CardsEnum, DetailedCardEnum } from '../../constants';

import './planets.css';

export const Planets = () => {
  const [planets, setPlanets] = useState(null);
  const [currentPlanet, setCurrentPlanet] = useState(null);

  useEffect(() => {
    api
      .getPlanetList()
      .then((data) => {
        setPlanets(data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleOnClick = (id) => {
    api
      .getPlanetById(id)
      .then((data) => {
        setCurrentPlanet(data.result);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <h2 className="episode-select">Planets</h2>
      {currentPlanet && currentPlanet?.properties && (
        <DetailedCard
          currentCardItem={currentPlanet?.properties}
          type={DetailedCardEnum.PLANETS}
        />
      )}
      <article className="planets">
        {planets ? (
          planets.map((planet) => {
            return (
              <Card
                key={planet.uid}
                type={CardsEnum.CHARACTERS}
                card={{
                  id: planet.uid,
                  description: planet.name
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
