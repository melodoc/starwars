import { DetailedCardEnum } from '../enums';

export class CardHelperUtil {
  static _cardCharacterImage = {
    'Luke Skywalker': 'luke.png',
    'C-3PO': 'C-3PO.png',
    'R2-D2': 'r2d2.png',
    'Darth Vader': 'darth-vader.png',
    'Leia Organa': 'leia.png',
    'Owen Lars': 'owen.jpg',
    'Beru Whitesun lars': 'beru.jpeg',
    'R5-D4': 'R5-D4.webp',
    'Biggs Darklighter': 'biggs.jpeg',
    'Obi-Wan Kenobi': 'obi_wan_kenobi.png',
    default: 'default.png'
  };

  static getCharacterImgLink(characterItemName) {
    const imageName =
      CardHelperUtil._cardCharacterImage[characterItemName] === '' ||
      CardHelperUtil._cardCharacterImage[characterItemName] === undefined
        ? CardHelperUtil._cardCharacterImage.default
        : CardHelperUtil._cardCharacterImage[characterItemName];
    return require(`../assets/images/background/${imageName}`);
  }

  static mapCardToDetailedCardData(currentCard, type) {
    return type === DetailedCardEnum.CHARACTERS
      ? {
          name: currentCard?.name,
          image: CardHelperUtil.getCharacterImgLink(currentCard?.name),
          items: [
            { label: 'Height', value: currentCard?.height },
            { label: 'Mass', value: currentCard?.mass },
            { label: 'Eye color', value: currentCard?.eye_color },
            { label: 'Birth year', value: currentCard?.birth_year }
          ]
        }
      : {
          name: currentCard?.name,
          image: CardHelperUtil.getCharacterImgLink(currentCard?.name),
          items: [
            { label: 'Diameter', value: currentCard?.diameter },
            { label: 'Rotation period', value: currentCard?.rotation_period },
            { label: 'Orbital period', value: currentCard?.orbital_period },
            { label: 'Gravity', value: currentCard?.gravity },
            { label: 'Population', value: currentCard?.population },
            { label: 'Climate', value: currentCard?.climate },
            { label: 'Terrain', value: currentCard?.terrain },
            { label: 'Surface water', value: currentCard?.surface_water }
          ]
        };
  }
}
