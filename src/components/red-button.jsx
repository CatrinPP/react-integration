import React from 'react';
import PropTypes from 'prop-types';

const RedButton = ({btnClass, text}) => {
  return (
    <button className={`btn btn--red   ${btnClass}`} type="button">
      <span className="btn__text">{text}</span>

      <svg className="icon icon-arrow-right btn__icon">
        <use xlinkHref="#arrow-right"></use>
      </svg>
    </button>
  );
};

RedButton.propTypes = {
  btnClass: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default RedButton;
