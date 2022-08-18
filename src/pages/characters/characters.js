import React, { useEffect, useState } from 'react';

import { Card } from '../../components/card';
import { DetailedCard } from '../../components/detailed-card';
import { api } from '../../api';
import { CardsEnum, DetailedCardEnum } from '../../constants';

import './characters.css';

export const Characters = () => {
  const [characters, setCharacters] = useState(null);
  const [currentCharacter, setCurrentCharacter] = useState(null);

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
    api
      .getCharacterById(id)
      .then((data) => {
        setCurrentCharacter(data.result);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <h2 className="episode-select">Characters</h2>
      {currentCharacter && currentCharacter?.properties && (
        <DetailedCard
          currentCardItem={currentCharacter?.properties}
          type={DetailedCardEnum.CHARACTERS}
        />
      )}
      <article className="characters">
        {characters
          ? characters.map((character) => {
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
          : 'Loading...'}
      </article>
    </>
  );
};
