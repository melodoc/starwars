import './starship-card.css';

const Paragraph = ({ label, value }) => {
  return (
    <p className="starship-paragraph">
      <span className="starship-description">{label}:</span>
      <span className="starship-card">{value}</span>
    </p>
  );
};

export const StarshipCard = ({ card }) => {
  const starshipCards = [
    { label: 'Class', value: card.starship_class },
    { label: 'Manufacturer', value: card.manufacturer },
    { label: 'Cost In Credits', value: card.cost_in_credits },
    { label: 'Crew', value: card.crew },
    { label: 'Passengers', value: card.passengers },
    { label: 'Max Atmosphering Speed', value: card.max_atmosphering_speed },
    { label: 'Hyperdrive Rating', value: card.hyperdrive_rating },
    { label: 'MGLT', value: card.MGLT },
    { label: 'Cargo Capacity', value: card.cargo_capacity },
    { label: 'Consumables', value: card.consumables }
  ];

  return (
    <>
      <h2 className="starship-card-header">About {card.name}</h2>
      <div className="starship-card-container">
        {starshipCards.map((starshipCard) => (
          <Paragraph label={starshipCard.label} value={starshipCard.value} />
        ))}
      </div>
    </>
  );
};
