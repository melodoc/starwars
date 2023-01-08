import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Card } from '../../components/card';
import { DetailedCard } from '../../components/detailed-card';
import { Loader } from '../../components/loader';
import { api } from '../../api';
import { CardsEnum, DetailedCardEnum } from '../../constants';

import './planets.css';

export const Planets = () => {
  const [planets, setPlanets] = useState(null);
  const [currentPlanet, setCurrentPlanet] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    api
      .getPlanetById(id)
      .then((data) => {
        setCurrentPlanet(data.result);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <h2 className="episode-select">Planets</h2>
      {isLoading ? (
        <div className="characters-loader">
          <Loader />
        </div>
      ) : (
        currentPlanet &&
        currentPlanet?.properties && (
          <DetailedCard
            currentCardItem={currentPlanet?.properties}
            type={DetailedCardEnum.PLANETS}
          />
        )
      )}
      <article className="planets">
        {planets ? (
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
          >
            {planets.map((planet) => {
              return (
                <SwiperSlide key={planet.uid}>
                  <Card
                    key={planet.uid}
                    type={CardsEnum.CHARACTERS}
                    card={{
                      id: planet.uid,
                      description: planet.name
                    }}
                    onClick={handleOnClick}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <Loader />
        )}
      </article>
    </>
  );
};
