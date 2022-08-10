import React, { useEffect, useState } from 'react';

import { Card } from '../../components/card';
import { InfoPanel } from '../../components/info-panel/info-panel';

import { api } from '../../api/api';
import './characters.css';

export const Characters = () => {
  const [characters, setCharacters] = useState(null);
  // const [currentCharacters, setCurrentCharacters] = useState(null);

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

  console.info(characters);

  const handleOnClick = (id) => {
    console.info(id);
    // const selectedCharacters = characters.find((film) => film._id === id);
    // setCurrentCharacters(selectedCharacters);
  };

  return (
    <>
      {/* <InfoPanel currentCharacters={currentCharacters} /> */}
      <article className="characters">
        {characters
          ? characters.map((character) => {
              return (
                <Card
                key={character.uid}
                card={{
                  id: character.uid,
                  description: character.name,
                }}
                onClick={handleOnClick} />
              );
            })
          : 'Loading...'}
      </article>
    </>
  );
};
