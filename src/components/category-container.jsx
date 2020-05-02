import React from 'react';
import PropTypes from 'prop-types';
import CategoryCard from './category-card.jsx';
import ShowMoreButton from './show-more-button.jsx';
import {cardShape} from '../consts.js';

const CategoryContainer = ({cards}) => {
  return (
    <div className="container category__container">
      <ul className="category__list js-category-list">
        {cards.map((item, index) => (
          <CategoryCard
            card={item}
            key={index}
          />
        ))}
      </ul>
      <ShowMoreButton />
    </div>
  );
};

CategoryContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(cardShape)).isRequired,
};

export default CategoryContainer;
