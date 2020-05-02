const CARDS_COUNT = 24;

const categoryCards = [
  {
    title: `Bags & Briefcases`,
    subcategories: [`Power tool`, `Hand tool`, `Measuring tool`, `Power machinery`, `Fastener`, `Accessories`],
    image: `assets/img/content/category0.png`,
  }, {
    title: `Pantry & Kitchen Supplies`,
    subcategories: [`Fittings`, `Water heaters`, `Pumps and pumping quipment`, `Faucets`, `Shower program`],
    image: `assets/img/content/category1.png`,
  }, {
    title: `Paper`,
    subcategories: [`Sinks, washbasins and pedestals`, `Bathroom Furniture`, `Showers and accessories`, `Bathroom accessories`, `Toilets and bidets`, `Towel Rai`, `Furniture for kitchen`, `Kitchen sinks`],
    image: `assets/img/content/category2.png`,
  }, {
    title: `Printing cartridges & toners`,
    subcategories: [`Wiring harness`, `Sockets and switches`, `Light bulbs`, `Lighting fixtures`],
    image: `assets/img/content/category3.png`,
  }, {
    title: `Heating and ventilation`,
    subcategories: [`Fittings and fittings`, `Warm floor`, `Heat guns`, `Equipment for bath`, `Air conditioners`, `Radiators`],
    image: `assets/img/content/category4.png`,
  }, {
    title: `Computers & accessories`,
    subcategories: [`Furniture`, `Wall decorations`, `Pictures and posters`, `Interior elements`, `Carpets and skins`, `Fireplaces`, `Mirrors`, `Clock`],
    image: `assets/img/content/category5.png`,
  }
];

const generateCard = () => {
  return Object.assign({}, categoryCards[Math.floor(Math.random() * categoryCards.length)]);
};

const generateCards = () => {
  return new Array(CARDS_COUNT)
    .fill(null)
    .map(generateCard);
};

export {generateCards};
