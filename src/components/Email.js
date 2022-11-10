import React from "react";
import "../style/Email.css";

const Email = ({
  onSubmitUser,
  handleChange,
  emailIsTaken,
  incorrectEmail,
  incorrectPassword,
  otherError,
  togglePopup,
  login,
}) => {
  return (
    <div className="auth-container email">
      <div className="cancel-popup" onClick={() => togglePopup()}>
        x
      </div>
      {(() => {
        if (login)
          return <div className="sign-up-title">Sign into your account</div>;
        else return <div className="sign-up-title">Create your account</div>;
      })()}
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
            if (incorrectEmail)
              return (
                <div className="error">
                  This email is not associated with an account.
                </div>
              );
            if (otherError)
              return (
                <div className="error">
                  Something went wrong please try again.
                </div>
              );
          })()}
        </div>
        <div className="input-contianer">
          <input
            onChange={handleChange}
            type="password"
            id="password"
            placeholder="Password"
            required
          />
          {(() => {
            if (incorrectPassword)
              return (
                <div className="error">
                  Incorrect password. Please try again.
                </div>
              );
          })()}
        </div>

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
