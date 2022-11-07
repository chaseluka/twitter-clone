import React from "react";
import "../style/Email.css";

const Email = (props) => {
  //pass in onclick to create account to create a new account via auth
  return (
    <div className="auth-container email">
      <div className="cancel-popup">x</div>
      <div className="sign-up-title">Create your account</div>
      <form id="email-su">
        <input type="text" id="email" placeholder="Email" />
        <input type="password" id="password" placeholder="Password" />
        <input type="text" id="username" placeholder="Username" />
      </form>
      <div className="sign-up-option-container">
        <div className="sign-up-text-container">
          <div className="sign-up-text">Create Account</div>
        </div>
      </div>
    </div>
  );
};

export default Email;
