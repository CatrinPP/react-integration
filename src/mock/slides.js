const SLIDES_COUNT = 5;

const slide = {
  title: `Project site based needs`,
  description: `Nuts, bolts, tools, consumables Create bundles & repeat buys Local vendors & simple process`,
  image: `assets/img/content/catalog-slider-bg.jpg`,
};

const generateSlides = () => {
  return new Array(SLIDES_COUNT)
    .fill(Object.assign({}, slide));
};

export {generateSlides};
