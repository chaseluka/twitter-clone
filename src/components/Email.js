import React from "react";
import "../style/Email.css";

const Email = ({ onSubmitUser, handleChange, emailIsTaken }) => {
  return (
    <div className="auth-container email">
      <div className="cancel-popup">x</div>
      <div className="sign-up-title">Create your account</div>
      <form id="email-su" onSubmit={onSubmitUser}>
        <div className="input-contianer">
          <input
            onChange={handleChange}
            type="text"
            id="email"
            placeholder="Email"
            maxLength={100}
            required
          />
          {(() => {
            if (emailIsTaken)
              return (
                <div className="error">
                  This email is in use. Please use another.
                </div>
              );
          })()}
        </div>

        <input
          onChange={handleChange}
          type="password"
          id="password"
          placeholder="Password"
          required
        />
        <button className="sign-up-option-container" type="submit">
          <div className="sign-up-text-container">
            <div className="sign-up-text">Continue</div>
          </div>
        </button>
      </form>
    </div>
  );
};

export default Email;
