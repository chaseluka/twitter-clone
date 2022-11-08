import React, { useState } from "react";
import "../style/Popup.css";
import { ReactComponent as GoogleLogo } from "../style/images/google.svg";
import Email from "./Email";
import FinishAccount from "./FinishAccount";

const SignUp = ({
  googleSignIn,
  createViaEmail,
  saveUserToDatabase,
  usernameIsAvailable,
}) => {
  const [emailSelected, setEmailSelected] = useState(false);
  const [finish, setFinish] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [usernameIsTaken, setUsernameIsTaken] = useState(false);

  const onSubmitUser = (e) => {
    e.preventDefault();
    if (finish) {
      if (usernameIsAvailable(username)) {
        saveUserToDatabase(username, displayName);
      } else setUsernameIsTaken(true);
    }
    if (emailSelected && !finish) {
      createViaEmail(email, password);
      setFinish(true);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.id === "email") setEmail(e.target.value);
    if (e.target.id === "password") setPassword(e.target.value);
    if (e.target.id === "username") setUsername(e.target.value);
    if (e.target.id === "display-name") setDisplayName(e.target.value);
  };

  return (
    <div className="popup-wrapper">
      {(() => {
        if (!emailSelected && !finish)
          return (
            <div className="auth-container">
              <div className="cancel-popup">x</div>
              <div className="sign-up-title">Join TwitterClone Today</div>
              <div className="sign-in-options">
                <div
                  className="sign-up-option-container"
                  onClick={() => {
                    googleSignIn();
                    setFinish(true);
                  }}
                >
                  <GoogleLogo />
                  <div className="sign-up-text-container">
                    <div className="sign-up-text">Sign up with Google</div>
                  </div>
                </div>
                <div
                  className="sign-up-option-container"
                  onClick={() => setEmailSelected(true)}
                >
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
      })()}
      {(() => {
        if (emailSelected && !finish)
          return (
            <Email onSubmitUser={onSubmitUser} handleChange={handleChange} />
          );
        if (finish)
          return (
            <FinishAccount
              onSubmitUser={onSubmitUser}
              handleChange={handleChange}
              usernameIsTaken={usernameIsTaken}
              setUsernameIsTaken={setUsernameIsTaken}
            />
          );
      })()}
    </div>
  );
};

export default SignUp;
