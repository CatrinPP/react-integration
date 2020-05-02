import React from 'react';
import Header from './header.jsx';
import Main from './main.jsx';
import {categories} from '../mock/categories.js';
import {cartItems} from '../mock/cart-items';
import {generateCards} from '../mock/cards.js';
import {generateSlides} from '../mock/slides.js';

const App = () => {
  const cards = generateCards();
  const slides = generateSlides();

  return (
    <React.Fragment>
      <Header />
      <Main
        categories={categories}
        cartItems={cartItems}
        cards={cards}
        slides={slides}
      />

      <footer className="page-footer">
        <div className="container page-footer__container">
          <div className="page-footer__head">
            <div className="page-footer__contact-col">
              <div className="page-footer__header page-footer__header--contact">Contact us</div>
              <a href="tel:+971582322400" className="page-footer__phone">
                <img src="assets/svg_icons/phone.svg" alt="" className="page-footer__phone-icon"/>
                <span className="page-footer__phone-text">1 800 289 4743</span>
              </a>
              <a href="mailto:info@trivialbuy.com" className="page-footer__email">info@gotuguzel.com</a>
            </div>
            <div className="page-footer__links-col">
              <ul className="page-footer__category">

                <li className="page-footer__category-li page-footer__category-li--how-to">
                  <div className="page-footer__header">How to</div>
                  <ul className="page-footer__links">

                    <li className="page-footer__links-li"><a href="#" className="page-footer__link">Add item to catalog</a></li>

                    <li className="page-footer__links-li"><a href="#" className="page-footer__link">Become a customer</a></li>

                    <li className="page-footer__links-li"><a href="#" className="page-footer__link">Become a supplier</a></li>

                  </ul>
                </li>

                <li className="page-footer__category-li page-footer__category-li--customer-service">
                  <div className="page-footer__header">Customer Service</div>
                  <ul className="page-footer__links">

                    <li className="page-footer__links-li"><a href="#" className="page-footer__link">FAQ</a></li>

                    <li className="page-footer__links-li"><a href="#" className="page-footer__link">Help Center</a></li>

                    <li className="page-footer__links-li"><a href="#" className="page-footer__link">Compliants</a></li>

                  </ul>
                </li>

                <li className="page-footer__category-li page-footer__category-li--">
                  <div className="page-footer__header">Policy</div>
                  <ul className="page-footer__links">

                    <li className="page-footer__links-li"><a href="#" className="page-footer__link">Return Policy</a></li>

                    <li className="page-footer__links-li"><a href="#" className="page-footer__link">Terms Of Use</a></li>

                    <li className="page-footer__links-li"><a href="#" className="page-footer__link">Privacy Policy</a></li>

                  </ul>
                </li>

              </ul>
            </div>
            <div className="page-footer__social-col page-footer__social-col--mobile">


              <div className="social page-footer__social">
                <ul className="social__list">

                  <li className="social__li"><a href="#" className="social__item"><img src="assets/svg_icons/facebook.svg" alt="" className="social__img"/></a></li>

                  <li className="social__li"><a href="#" className="social__item"><img src="assets/svg_icons/twitter.svg" alt="" className="social__img"/></a></li>

                  <li className="social__li"><a href="#" className="social__item"><img src="assets/svg_icons/youtube.svg" alt="" className="social__img"/></a></li>

                </ul>
              </div>

              <a href="#" className="page-footer__by page-footer__by--mobile"><img src="assets/svg_icons/nkh.svg" alt="" className="page-footer__by-img"/></a>
            </div>
          </div>
          <div className="page-footer__bot">
            <div className="page-footer__copy">
              <div className="page-footer__copy-date">© 2019 HUB Inc.</div>
              <div className="page-footer__copy-desc">These are related items according to shopper&apos;s purchase history.</div>
            </div>
            <div className="page-footer__social-col">


              <div className="social page-footer__social">
                <ul className="social__list">

                  <li className="social__li"><a href="#" className="social__item"><img src="assets/svg_icons/facebook.svg" alt="" className="social__img"/></a></li>

                  <li className="social__li"><a href="#" className="social__item"><img src="assets/svg_icons/twitter.svg" alt="" className="social__img"/></a></li>

                  <li className="social__li"><a href="#" className="social__item"><img src="assets/svg_icons/youtube.svg" alt="" className="social__img"/></a></li>

                </ul>
              </div>

              <a href="#" className="page-footer__by page-footer__by--mobile"><img src="assets/svg_icons/nkh.svg" alt="" className="page-footer__by-img"/></a>
            </div>
            <a href="#" className="page-footer__by"><img src="assets/svg_icons/nkh.svg" alt="" className="page-footer__by-img"/></a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default App;
