import React from 'react';
import {PropTypes} from 'prop-types';
import {slideShape} from '../consts.js';

const Slide = ({slide}) => {
  return (
    <li className="catalog-slider__li">
      <div style={{backgroundImage: `url(${slide.image})`}} className="catalog-slider__item">
        <div className="catalog-slider__header">{slide.title}</div>
        <img src="assets/svg_icons/slider-arrow-right.svg" alt="" className="catalog-slider__icon"/>
        <div className="catalog-slider__desc">{slide.description}</div>
      </div>
    </li>
  );
};

Slide.propTypes = {
  slide: PropTypes.shape(slideShape).isRequired,
};

export default Slide;
