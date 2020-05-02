import React from 'react';
import PropTypes from 'prop-types';
import SearchProduct from './search-product.jsx';
import {subcategoryShape} from '../consts.js';

const SearchSubcategory = ({subcategory}) => {
  return (
    <li className="category-select__li js-category-select-item">
      <div className="category-select__item">
        <a href="#" className="category-select__list-header js-category-select-sub-btn">
          {subcategory.title}
          <svg className="icon icon-arrow-next category-select__list-header-icon">
            <use xlinkHref="#arrow-next"></use>
          </svg>

        </a>
        <ul className="category-select__list js-category-select-list">
          {subcategory.products.map((item, index) => (
            <SearchProduct
              key={index}
              product={item}
            />
          ))}
        </ul>
      </div>
    </li>
  );
};

SearchSubcategory.propTypes = {
  subcategory: PropTypes.shape(subcategoryShape),
};

export default SearchSubcategory;
