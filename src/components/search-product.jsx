import React from 'react';
import PropTypes from 'prop-types';

const SearchProduct = ({product}) => {
  return (
    <li className="category-select__li">
      <div className="category-select__item">
        <a href="#" className="category-select__link js-category-select-link">{product}</a>
      </div>
    </li>
  );
};

SearchProduct.propTypes = {
  product: PropTypes.string.isRequired,
};

export default SearchProduct;
