import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Card } from '../../components/card';
import { StarshipCard } from '../../components/starship-card';
import { Loader } from '../../components/loader';
import { StarWarsApiService } from '../../api';
import { CardsEnum } from '../../enums';

import './starship.css';

export const Starship = () => {
  const [starship, setStarship] = useState(null);
  const [currentStarship, setCurrentStarship] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    StarWarsApiService
      .getStarshipList()
      .then((data) => {
        setStarship(data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleOnClick = (id) => {
    setIsLoading(true);
    StarWarsApiService
      .getStarshipById(id)
      .then((data) => {
        setCurrentStarship(data.result);
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
      <h2 className="episode-select">Starship</h2>
      {isLoading ? (
        <div className="characters-loader">
          <Loader />
        </div>
      ) : (
        currentStarship &&
        currentStarship?.properties && <StarshipCard card={currentStarship.properties} />
      )}
      <article className="starship">
        {starship ? (
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
          >
            {starship.map((starship) => {
              return (
                <SwiperSlide key={starship.uid}>
                  <Card
                    type={CardsEnum.CHARACTERS}
                    card={{
                      id: starship.uid,
                      description: starship.name
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
