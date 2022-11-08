import React from "react";
import "../style/Email.css";

const Email = (props) => {
  const onSubmitUser = props.onSubmitUser;
  const handleChange = props.handleChange;

  return (
    <div className="auth-container email">
      <div className="cancel-popup">x</div>
      <div className="sign-up-title">Create your account</div>
      <form id="email-su" onSubmit={onSubmitUser}>
        <input
          onChange={handleChange}
          type="text"
          id="email"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          type="password"
          id="password"
          placeholder="Password"
        />
        <input
          onChange={handleChange}
          type="text"
          id="username"
          placeholder="Username"
        />
        <input
          onChange={handleChange}
          type="text"
          id="display-name"
          placeholder="Display Name"
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

export default Email;
