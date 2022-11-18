import React, { useEffect, useState } from "react";
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
  login,
}) => {
  const [loginSelected, setLoginSelected] = useState(false);

  useEffect(() => {
    if (login) setLoginSelected(true);
    else setLoginSelected(false);
  }, [login]);

  return (
    <div id="popup" role="form">
      {(() => {
        if (loginSelected) {
          return (
            <Login
              googleSignIn={googleSignIn}
              signUserIn={signUserIn}
              emailIsValid={emailIsValid}
              passwordIsCorrect={passwordIsCorrect}
              noOtherErrors={noOtherErrors}
              togglePopup={togglePopup}
              setLoginSelected={setLoginSelected}
            />
          );
        } else
          return (
            <SignUp
              googleSignIn={googleSignIn}
              createViaEmail={createViaEmail}
              saveUserToDatabase={saveUserToDatabase}
              usernameIsAvailable={usernameIsAvailable}
              emailIsAvailable={emailIsAvailable}
              togglePopup={togglePopup}
              setLoginSelected={setLoginSelected}
            />
          );
      })()}
    </div>
  );
};

export default Popup;
