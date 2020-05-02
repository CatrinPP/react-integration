import React from 'react';
import PropTypes from 'prop-types';
import CartPopupItem from './cart-popup-item.jsx';
import RedButton from './red-button.jsx';
import {productShape} from '../consts.js';

const CartPopup = ({cartItems}) => {
  return (
    <div className="cart-popup js-cart-popup">
      <div className="cart-popup__header">
        <div className="cart-popup__header-text">My Cart</div>
        <RedButton
          btnClass={`cart-popup__header-btn`}
          text={`Checkout`}
        />

      </div>
      <div className="cart-popup__content-container">
        <div className="cart-popup__overflow-container">
          <ul className="cart-popup__list">
            {cartItems.map((supplier) => supplier.products.map((item, index) => (
              <CartPopupItem
                isFirst={index === 0 ? true : false}
                key={index}
                product={item}
              />
            )))}
          </ul>
        </div>
      </div>
      <div className="cart-popup__total">
        <div className="cart-popup__total-header">Total Product Price:</div>
        <div className="cart-popup__total-price">28,705.43</div>
      </div>
      <div className="cart-popup__content-container">
        <RedButton
          btnClass={`cart-popup__btn-checkout`}
          text={`Checkout`}
        />

      </div>
    </div>
  );
};

CartPopup.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({products: PropTypes.arrayOf(PropTypes.shape(productShape))})),
};

export default CartPopup;
