const generateProducts = (count, supplier) => {
  return new Array(count).fill({
    image: `assets/img/content/catalog0.png`,
    price: `10.50`,
    supplier,
    title: `Easel Pads 3M 25 x 30 Inches 30 sheets per pad white`,
  });
};


export const cartItems = [
  {
    supplier: `Desert Valley`,
    products: generateProducts(2, `Desert Valley`),
  }, {
    supplier: `Trade key`,
    products: generateProducts(4, `Trade key`),
  }
];
