import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Character } from '../../components/character';
import { DetailedCard } from '../../components/detailed-card';
import { Loader } from '../../components/loader';
import { api } from '../../api';
import { CardsEnum, DetailedCardEnum } from '../../constants';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './characters.css';

export const Characters = () => {
  const [characters, setCharacters] = useState(null);
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    api
      .getCharactersList()
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleOnClick = (id) => {
    setIsLoading(true);
    api
      .getCharacterById(id)
      .then((data) => {
        setCurrentCharacter(data.result);
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
      <h2 className="episode-select">Characters</h2>
      {isLoading ? (
        <div className="characters-loader">
          <Loader />
        </div>
      ) : (
        currentCharacter &&
        currentCharacter?.properties && (
          <DetailedCard
            currentCardItem={currentCharacter?.properties}
            type={DetailedCardEnum.CHARACTERS}
          />
        )
      )}
      <article className="characters">
        {characters ? (
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {characters.map((character) => {
              return (
                <SwiperSlide>
                  <Character
                    key={character.uid}
                    type={CardsEnum.CHARACTERS}
                    character={{
                      id: character.uid,
                      description: character.name
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
