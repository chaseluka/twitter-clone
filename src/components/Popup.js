import React, { useState } from "react";
import "../style/Popup.css";
import SignUp from "./SignUp";
import Login from "./Login";

const Popup = ({
  googleSignIn,
  createViaEmail,
  saveUserToDatabase,
  usernameIsAvailable,
  emailIsAvailable,
  signUserIn,
  emailIsValid,
  passwordIsCorrect,
  noOtherErrors,
  togglePopup,
}) => {
  const [signUpSelected, setSignUpSelected] = useState(false);

  return (
    <div id="popup">
      {(() => {
        if (signUpSelected) {
          return (
            <SignUp
              googleSignIn={googleSignIn}
              createViaEmail={createViaEmail}
              saveUserToDatabase={saveUserToDatabase}
              usernameIsAvailable={usernameIsAvailable}
              emailIsAvailable={emailIsAvailable}
              togglePopup={togglePopup}
            />
          );
        } else
          return (
            <Login
              googleSignIn={googleSignIn}
              signUserIn={signUserIn}
              emailIsValid={emailIsValid}
              passwordIsCorrect={passwordIsCorrect}
              noOtherErrors={noOtherErrors}
              togglePopup={togglePopup}
            />
          );
      })()}
    </div>
  );
};

export default Popup;
