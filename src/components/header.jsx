import React from 'react';

const Header = () => {
  return (
    <header className="page-header">
      <div className="container page-header__container js-parent-container">
        <button type="button" className="page-header__menu js-menu-open">
          <img src="assets/svg_icons/burger.svg" alt="" className="page-header__menu-icon"/>
        </button>

        <a href="#" className="page-header__logo"><img src="assets/svg_icons/logo-mobile.svg" alt="" className="page-header__logo-img"/></a>
        <div className="page-header__logo-desktop">Welcome to Demo, Inc</div>

        <button type="button" className="page-header__ring">
          <img src="assets/svg_icons/ring.svg" alt="" className="page-header__ring-icon"/>
          <div className="circle-counter ">2</div>

        </button>
        <button type="button" className="page-header__cart">
          <svg className="icon icon-cart page-header__cart-icon">
            <use xlinkHref="#cart"></use>
          </svg>

        </button>
        <button type="button" className="page-header__profile">
          <img src="assets/svg_icons/user.svg" alt="" className="page-header__profile-icon"/>
          <div className="page-header__profile-text">Hello, Sign in <span className="page-header__profile-red">Cratsman India</span></div>
          <div className="page-header__profile-dropdown">
            <div className="page-header__profile-wrapper">
              <ul className="page-header__profile-list">

                <li className="page-header__profile-li">
                  <a href="#" className="page-header__profile-link">Profile Edit</a>
                </li>

                <li className="page-header__profile-li">
                  <a href="#" className="page-header__profile-link">Delegate From</a>
                </li>

                <li className="page-header__profile-li">
                  <a href="#" className="page-header__profile-link">Cross Country</a>
                </li>

                <li className="page-header__profile-li">
                  <a href="#" className="page-header__profile-link">Delegation Settings</a>
                </li>

                <li className="page-header__profile-li">
                  <a href="#" className="page-header__profile-link">Logout</a>
                </li>

              </ul>
            </div>
          </div>
        </button>
      </div>


      <div className="mobile-menu js-menu">
        <div className="container mobile-menu__container">
          <div className="mobile-menu__header">
            <button type="button" className="mobile-menu__close js-menu-close">
              <img src="assets/svg_icons/close-menu.svg" alt="" className="mobile-menu__close-icon"/>
            </button>
            <div className="page-header__welcome mobile-menu__welcome">Turkey, Turkish Lira</div>
            <button type="button" className="page-header__profile">
              <img src="assets/svg_icons/user.svg" alt="" className="page-header__profile-icon"/>
              <div className="page-header__profile-text">Hello, Sign in <span className="page-header__profile-red">Cratsman India</span></div>
            </button>
          </div>
          <div className="mobile-menu__content">

            <ul className="mobile-menu__list">

              <li className="mobile-menu__li">
                <div className="mobile-menu__item">
                  <div className="mobile-menu__title">How to</div>
                  <ul className="mobile-menu__links">

                    <li className="mobile-menu__links-li">
                      <a href="#" className="mobile-menu__link">Add item to catalog</a>
                    </li>

                    <li className="mobile-menu__links-li">
                      <a href="#" className="mobile-menu__link">Become a customer</a>
                    </li>

                    <li className="mobile-menu__links-li">
                      <a href="#" className="mobile-menu__link">Become a supplier</a>
                    </li>

                  </ul>
                </div>
              </li>

              <li className="mobile-menu__li">
                <div className="mobile-menu__item">
                  <div className="mobile-menu__title">Customer Service</div>
                  <ul className="mobile-menu__links">

                    <li className="mobile-menu__links-li">
                      <a href="#" className="mobile-menu__link">FAQ</a>
                    </li>

                    <li className="mobile-menu__links-li">
                      <a href="#" className="mobile-menu__link">Help Center</a>
                    </li>

                    <li className="mobile-menu__links-li">
                      <a href="#" className="mobile-menu__link">Compliants</a>
                    </li>

                  </ul>
                </div>
              </li>

              <li className="mobile-menu__li">
                <div className="mobile-menu__item">
                  <div className="mobile-menu__title">Policy</div>
                  <ul className="mobile-menu__links">

                    <li className="mobile-menu__links-li">
                      <a href="#" className="mobile-menu__link">Return Policy</a>
                    </li>

                    <li className="mobile-menu__links-li">
                      <a href="#" className="mobile-menu__link">Terms Of Use</a>
                    </li>

                    <li className="mobile-menu__links-li">
                      <a href="#" className="mobile-menu__link">Privacy Policy</a>
                    </li>

                  </ul>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
