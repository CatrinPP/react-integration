import React from 'react';
import PropTypes from 'prop-types';
import CartPopup from './cart-popup.jsx';
import Search from './search.jsx';
import {categoryShape, productShape} from '../consts.js';

const Navigation = ({cartItems, categories}) => {
  const cartItemsCount = cartItems.reduce((acc, currentItem) => acc + currentItem.products.length, 0);

  return (
    <section className="navigation js-navigation ">
      <div className="container navigation__container">
        <a href="#" className="navigation__logo"><img src="assets/svg_icons/logo.svg" alt=""/></a>
        <Search
          categories={categories}
        />

        <div className="navigation__cart js-cart">
          <div className="navigation__cart-icon-wrap">
            <svg className="icon icon-cart navigation__cart-icon">
              <use xlinkHref="#cart"></use>
            </svg>

            <div className="circle-counter navigation__cart-counter">{cartItemsCount}</div>

          </div>
          <div className="navigation__cart-text">Shopping Cart</div>
          <CartPopup
            cartItems={cartItems}
          />
        </div>
      </div>
    </section>
  );
};

Navigation.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({products: PropTypes.arrayOf(PropTypes.shape(productShape))})),
  categories: PropTypes.arrayOf(PropTypes.shape(categoryShape)).isRequired
};

export default Navigation;
