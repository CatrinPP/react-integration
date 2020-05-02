import React from 'react';
import PropTypes from 'prop-types';
import {cardShape} from '../consts.js';

const createSubcategoryMarkup = (linkTitle) => {
  return (
    <li className="category-card__li" key={linkTitle}>
      <a href="http://dev.nkhstudio.ru/buygrid/catalog.html" className="category-card__link">{linkTitle}</a>
    </li>
  );
};

const CategoryCard = ({card}) => {
  const categoryNameSplittedByWords = card.title.split(` `);
  const categoryNameSecondPart = categoryNameSplittedByWords.length > 0 ? categoryNameSplittedByWords.slice(1).join(` `) : null;

  return (
    <li className="category__li js-category-item">
      <div className="category-card">
        <a href="http://dev.nkhstudio.ru/buygrid/catalog.html" className="category-card__header">{categoryNameSplittedByWords[0]} {categoryNameSecondPart && <span className="category-card__header-red">{categoryNameSecondPart}</span>}</a>
        <ul className="category-card__list">
          {card.subcategories.map((item) => createSubcategoryMarkup(item))}
        </ul>
        <img src={card.image} alt="" className="category-card__img"/>
      </div>
    </li>
  );
};

CategoryCard.propTypes = {
  card: PropTypes.shape(cardShape).isRequired,
};

export default CategoryCard;
