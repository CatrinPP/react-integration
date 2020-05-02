import React from 'react';
import PropTypes from 'prop-types';
import SearchCategory from './search-category.jsx';
import {categoryShape} from '../consts.js';

const Search = ({categories}) => {
  return (
    <form action="" className="search navigation__search">


      <div className="category-select js-category-select search__category-select">
        <button type="button" className="category-select__header js-category-select-btn">
          <div className="category-select__header-text js-category-select-placeholder">All Categories</div>
          <svg className="icon icon-chevron-down category-select__header-icon">
            <use xlinkHref="#chevron-down"></use>
          </svg>

        </button>
        <ul className="category-select__list js-category-select-list">
          {categories.map((item, index) => (
            <SearchCategory
              category={item}
              key={index}
            />
          ))}
        </ul>
      </div>

      <div className="search__field-box">
        <input placeholder="Search" type="text" className="search__field"/>
        <button type="submit" className="search__submit">
          <img src="assets/svg_icons/search.svg" alt="" className="search__submit-icon"/>
        </button>
      </div>
    </form>
  );
};

Search.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape(categoryShape)).isRequired,
};

export default Search;
