const characterPicPath = {
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

export const getImgLink = (characterItemName) => {
  const imageName =
    characterPicPath[characterItemName] === '' || characterPicPath[characterItemName] === undefined
      ? characterPicPath.default
      : characterPicPath[characterItemName];
  return require(`../../../assets/images/background/${imageName}`);
};
