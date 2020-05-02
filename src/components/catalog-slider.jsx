import React from 'react';
import PropTypes from 'prop-types';
import Slide from './slide.jsx';
import {slideShape} from '../consts.js';

const CatalogSlider = ({slides}) => {
  return (
    <section className="catalog-slider">
      <div className="catalog-slider__container">
        <ul className="catalog-slider__list js-catalog-slider">
          {slides.map((item, index) => (
            <Slide
              key={index}
              slide={item}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

CatalogSlider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape(slideShape)).isRequired,
};

export default CatalogSlider;
