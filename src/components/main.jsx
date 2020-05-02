import React from 'react';
import PropTypes from 'prop-types';
import AuthForm from './auth-form.jsx';
import CatalogSlider from './catalog-slider.jsx';
import CategoryContainer from './category-container.jsx';
import Navigation from './navigation.jsx';
import {cardShape, categoryShape, productShape, slideShape} from '../consts.js';

const Main = ({cards, cartItems, categories, slides}) => {
  return (
    <main className="site-content">
      <Navigation
        cartItems={cartItems}
        categories={categories}
      />

      <section className="join">
        <div className="container join__container">
          <div className="join__aside">
            <AuthForm />
            <a href="#" className="join__reset-pass">Forgot Password?</a>
          </div>
          <div className="join__content">
            <CatalogSlider
              slides={slides}
            />
          </div>
        </div>
      </section>


      <section className="category js-category">
        <CategoryContainer
          cards={cards}
        />
      </section>
    </main>
  );
};

Main.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(cardShape)).isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.shape({products: PropTypes.arrayOf(PropTypes.shape(productShape))})),
  categories: PropTypes.arrayOf(PropTypes.shape(categoryShape)).isRequired,
  slides: PropTypes.arrayOf(PropTypes.shape(slideShape)).isRequired,
};

export default Main;
