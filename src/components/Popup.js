import React, { useState } from "react";
import "../style/Popup.css";
import SignUp from "./SignUp";

const Popup = ({
  googleSignIn,
  createViaEmail,
  saveUserToDatabase,
  usernameIsAvailable,
}) => {
  const [signUpSelected, setSignUpSelected] = useState(true);

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
            />
          );
        }
      })()}
    </div>
  );
};

export default Popup;
