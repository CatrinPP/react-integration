import React from 'react';
import PropTypes from 'prop-types';
import SearchSubcategory from './search-subcategory.jsx';
import {categoryShape} from '../consts.js';

const SearchCategory = ({category}) => {
  return (
    <li className="category-select__li js-category-select-item">
      <a href="#" className="category-select__list-header js-category-select-sub-btn">{category.title}
        <svg className="icon icon-arrow-next category-select__list-header-icon">
          <use xlinkHref="#arrow-next"></use>
        </svg>

      </a>
      <ul className="category-select__list js-category-select-list">
        {category.subcategories.map((item, index) => (
          <SearchSubcategory
            key={index}
            subcategory={item}
          />
        ))}
      </ul>
    </li>
  );
};

SearchCategory.propTypes = {
  category: PropTypes.shape(categoryShape).isRequired,
};

export default SearchCategory;
