import React from "react";
import "../style/Popup.css";

const Google = (props) => {
  //pass in onclick to create account to create a new account via auth
  //use onsubmit for create account button

  const onSubmitUser = props.onSubmitUser;
  const handleChange = props.handleChange;

  return (
    <div className="auth-container email">
      <div className="cancel-popup">x</div>
      <div className="sign-up-title">Finish Creating Account</div>
      <form id="google-su" onSubmit={onSubmitUser}>
        <input
          type="text"
          id="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="text"
          id="display-name"
          placeholder="Display Name"
          onChange={handleChange}
        />
        <button className="sign-up-option-container" type="submit">
          <div className="sign-up-text-container">
            <div className="sign-up-text">Create Account</div>
          </div>
        </button>
      </form>
    </div>
  );
};

export default Google;
