import React from 'react';
import RedButton from './red-button.jsx';

const AuthForm = () => {
  return (
    <form action="" className="join__auth-form">
      <ul className="join__auth">
        <li className="join__auth-li">
          <input type="text" placeholder="Username" className="field"/>

        </li>
        <li className="join__auth-li">
          <input type="text" placeholder="Password" className="field"/>

        </li>
        <li className="join__auth-li">
          <RedButton
            btnClass={``}
            text={`Login`}
          />

        </li>
      </ul>
    </form>
  );
};

export default AuthForm;
