import {PropTypes} from 'prop-types';

export const cardShape = {
  title: PropTypes.string.isRequired,
  subcategories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  image: PropTypes.string.isRequired,
};

export const slideShape = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export const subcategoryShape = {
  title: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.string),
};

export const categoryShape = {
  title: PropTypes.string.isRequired,
  subcategories: PropTypes.arrayOf(PropTypes.shape(subcategoryShape)),
};

export const productShape = {
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  supplier: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
