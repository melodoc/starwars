import React from 'react';

import { DetailedCardEnum } from '../../enums';
import { CardHelperUtil } from '../../utils';

import './detailed-card.css';

const TableRow = ({ label, value }) => {
  return (
    <tr className="character-row-container">
      <td className="character-row character-row-label">{label ?? '-'}</td>
      <td className="character-row">{value ?? '-'}</td>
    </tr>
  );
};

export const DetailedCard = ({ currentCard, type }) => {
  const card = CardHelperUtil.mapCardToDetailedCardData(currentCard, type);
  return (
    <div className="character-card">
      <h2 className="character-card-title">Info about {card?.name || '-'}</h2>
      <div className="character-table-grid">
        <table className="character-table">
          <tbody>
            {(card?.items || []).map((character) => (
              <TableRow
                key={character?.label}
                label={character?.label}
                value={character?.value}
              />
            ))}
          </tbody>
        </table>
        {type === DetailedCardEnum.CHARACTERS && (
          <img className="character-table-image" src={card?.image} alt={card?.name} />
        )}
      </div>
    </div>
  );
};
