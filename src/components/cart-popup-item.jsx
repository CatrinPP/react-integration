import React from 'react';
import PropTypes from 'prop-types';
import {productShape} from '../consts.js';

const CartPopupItem = ({isFirst, product}) => {
  return (
    <li className="cart-popup__li">
      <div className="cart-popup__item">

        {isFirst ?
          <div className="cart-popup__card-header">
            <span className="cart-popup__card-header-text">Supplier:</span> <span className="cart-popup__text-bold">{product.supplier}</span>
          </div>
          : ``
        }

        <div className="cart-popup__img-container">
          <button type="button" className="cart-popup__close">
            <svg className="icon icon-close cart-popup__close-icon">
              <use xlinkHref="#close"></use>
            </svg>

          </button>
          <a href="#" className="cart-popup__img-box"><img src={product.image} alt="" className="cart-popup__img"/></a>
        </div>
        <div className="cart-popup__content">
          <div className="cart-popup__title">
            <a href="#" className="cart-popup__title-text">{product.title}</a>
          </div>
          <div className="cart-popup__desc">{product.supplier}</div>
        </div>
        <div className="counter cart-popup__counter js-counter">
          <button type="button" className="counter__cart">
            <img src="assets/svg_icons/cart-small.svg" alt="" className="counter__cart-img"/>

          </button>
          <div className="counter__main">
            <button type="button" className="counter__btn counter__btn--prev js-counter-btn-prev">
              <img className="counter__icon counter__icon--default" src="assets/svg_icons/minus.svg" alt=""/>
              <img className="counter__icon counter__icon--hover" src="assets/svg_icons/minus--hover.svg" alt=""/>
            </button>
            <input size="3" type="text" className="counter__number js-counter-number" onChange={() => {}} value="125"/>
            <button type="button" className="counter__btn counter__btn--next js-counter-btn-next">
              <img className="counter__icon counter__icon--default" src="assets/svg_icons/plus.svg" alt=""/>
              <img className="counter__icon counter__icon--hover" src="assets/svg_icons/plus--hover.svg" alt=""/>
            </button>
          </div>
        </div>

        <div className="cart-popup__price">{product.price}</div>
      </div>
    </li>
  );
};

CartPopupItem.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  product: PropTypes.shape(productShape).isRequired
};

export default CartPopupItem;
