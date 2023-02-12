import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Card } from '../../components/card';
import { DetailedCard } from '../../components/detailed-card';
import { Loader } from '../../components/loader';
import { StarWarsApiService } from '../../api';
import { CardsEnum, DetailedCardEnum } from '../../enums';

import './planets.css';

export const Planets = () => {
  const [planets, setPlanets] = useState(null);
  const [currentPlanet, setCurrentPlanet] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await StarWarsApiService.getPlanetList();
        if (mounted) {
          setPlanets(data.results);
        }
      } catch (err) {
        console.error(err);
      }
    })();
    return () => (mounted = false);
  }, []);

  const handleOnClick = async (id) => {
    setIsLoading(true);
    try {
      const data = await StarWarsApiService.getPlanetById(id);
      setCurrentPlanet(data.result);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
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
            currentCard={currentPlanet?.properties}
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
