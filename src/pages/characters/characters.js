import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Character } from '../../components/character';
import { DetailedCard } from '../../components/detailed-card';
import { Loader } from '../../components/loader';
import { StarWarsApiService } from '../../api';
import { CardsEnum, DetailedCardEnum } from '../../enums';

import './characters.css';

export const Characters = () => {
  const [characters, setCharacters] = useState(null);
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await StarWarsApiService.getCharactersList();
        if (mounted) {
          setCharacters(data.results);
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
      const data = await StarWarsApiService.getCharacterById(id);
      setCurrentCharacter(data.result);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
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
          >
            {characters.map((character) => {
              return (
                <SwiperSlide key={character.uid}>
                  <Character
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
