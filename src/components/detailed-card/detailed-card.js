import React from 'react';

import { DetailedCardEnum } from '../../enums';
import { getCardItemProps, getImgLink } from './utils';

import './detailed-card.css';

const TableRow = ({ label, value }) => {
  return (
    <tr className="character-row-container">
      <td className="character-row character-row-label">{label}</td>
      <td className="character-row">{value}</td>
    </tr>
  );
};

export const DetailedCard = ({ currentCardItem, type }) => {
  const cardItem = getCardItemProps(currentCardItem, type);
  const image = getImgLink(cardItem.name);

  const characters = [
    { label: 'Height', value: cardItem.height },
    { label: 'Mass', value: cardItem.mass },
    { label: 'Eye color', value: cardItem.eyeColor },
    { label: 'Birth year', value: cardItem.birthYear }
  ];

  const planets = [
    { label: 'Diameter', value: cardItem.diameter },
    { label: 'Rotation period', value: cardItem.rotationPeriod },
    { label: 'Orbital period', value: cardItem.orbitalPeriod },
    { label: 'Gravity', value: cardItem.gravity },
    { label: 'Population', value: cardItem.population },
    { label: 'Climate', value: cardItem.climate },
    { label: 'Terrain', value: cardItem.terrain },
    { label: 'Surface water', value: cardItem.surfaceWater }
  ];

  return type === DetailedCardEnum.CHARACTERS ? (
    <div className="character-card">
      <h2 className="character-card-title">Info about {cardItem.name}</h2>
      <div className="character-table-grid">
        <table className="character-table">
          <tbody>
            {characters.map((character) => (
              <TableRow
                key={character.label}
                label={character.label}
                value={character.value}
              />
            ))}
          </tbody>
        </table>
        <img className="character-table-image" src={image} alt={cardItem.name} />
      </div>
    </div>
  ) : (
    <div className="character-card">
      <h2 className="character-card-title">Info about {cardItem.name}</h2>
      <table className="character-table">
        <tbody>
          {planets.map((character) => (
            <TableRow
              key={character.label}
              label={character.label}
              value={character.value}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
