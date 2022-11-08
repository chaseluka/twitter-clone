import React from "react";
import "../style/Popup.css";
import { ReactComponent as GoogleLogo } from "../style/images/google.svg";

const SignUp = (props) => {
  const googleSignIn = props.googleSignIn;
  const google = props.google;
  const emailSignUp = props.email;

  return (
    <div className="auth-container">
      <div className="cancel-popup">x</div>
      <div className="sign-up-title">Join TwitterClone Today</div>
      <div className="sign-in-options">
        <div
          className="sign-up-option-container"
          onClick={() => {
            googleSignIn();
            google();
          }}
        >
          <GoogleLogo />
          <div className="sign-up-text-container">
            <div className="sign-up-text">Sign up with Google</div>
          </div>
        </div>
        <div className="sign-up-option-container" onClick={emailSignUp}>
          <div className="sign-up-text-container">
            <div className="sign-up-text">Sign up with Email</div>
          </div>
        </div>
      </div>
      <div className="have-account-container">
        <div className="have-account">Already have an account?</div>
        <div className="login-link">Log in</div>
      </div>
    </div>
  );
};

export default SignUp;
