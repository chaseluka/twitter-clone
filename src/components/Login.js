import React, { useState } from "react";
import "../style/Popup.css";
import { ReactComponent as GoogleLogo } from "../style/images/google.svg";
import Email from "./Email";

const Login = ({
  googleSignIn,
  signUserIn,
  emailIsValid,
  passwordIsCorrect,
  noOtherErrors,
  togglePopup,
}) => {
  const [emailSelected, setEmailSelected] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [incorrectEmail, setIncorrectEmail] = useState(false);
  const [otherError, setOtherError] = useState(false);

  //change inside, but don't change name
  const onSubmitUser = async (e) => {
    e.preventDefault();
    await signUserIn(email, password);
    if (!emailIsValid()) setIncorrectEmail(true);
    if (!passwordIsCorrect()) setIncorrectPassword(true);
    if (!noOtherErrors()) setOtherError(true);
    else togglePopup();
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.id === "email") setEmail(e.target.value);
    if (e.target.id === "password") setPassword(e.target.value);
  };

  return (
    <div className="popup-wrapper">
      {(() => {
        if (!emailSelected)
          return (
            <div className="auth-container">
              <div className="cancel-popup" onClick={() => togglePopup()}>
                x
              </div>
              <div className="sign-up-title">Join TwitterClone Today</div>
              <div className="sign-in-options">
                <div
                  className="sign-up-option-container"
                  onClick={() => {
                    googleSignIn();
                    togglePopup();
                  }}
                >
                  <GoogleLogo />
                  <div className="sign-up-text-container">
                    <div className="sign-up-text">Login with Google</div>
                  </div>
                </div>
                <div
                  className="sign-up-option-container"
                  onClick={() => setEmailSelected(true)}
                >
                  <div className="sign-up-text-container">
                    <div className="sign-up-text">Login with Email</div>
                  </div>
                </div>
              </div>
              <div className="have-account-container">
                <div className="have-account">Don't have an account?</div>
                <div className="login-link">Sign up</div>
              </div>
            </div>
          );
      })()}
      {(() => {
        if (emailSelected)
          return (
            <Email
              onSubmitUser={onSubmitUser}
              handleChange={handleChange}
              emailIsTaken={false}
              incorrectEmail={incorrectEmail}
              incorrectPassword={incorrectPassword}
              otherError={otherError}
              togglePopup={togglePopup}
            />
          );
      })()}
    </div>
  );
};

export default Login;
