import React from "react";
import "../style/Footer.css";

const Footer = ({ setLogin, setDisplayPopup }) => {
  const toggleLoginOrSignUp = (login) => {
    if (login) setLogin(true);
    else setLogin(false);
    setDisplayPopup(true);
  };
  return (
    <div id="footer">
      <div className="footer-message">Join or log in to TwitterClone!</div>
      <div className="footer-options">
        <div
          className="footer-option"
          onClick={() => toggleLoginOrSignUp(true)}
        >
          <div className="footer-option-text">Log in</div>
        </div>
        <div
          className="footer-option"
          onClick={() => toggleLoginOrSignUp(false)}
        >
          <div className="footer-option-text">Sign up</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
