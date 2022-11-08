import React, { useState } from "react";
import "../style/Popup.css";
import SignUp from "./SignUp";
import Email from "./Email";
import Google from "./Google";

const Popup = (props) => {
  const googleSignIn = props.google;
  const createViaEmail = props.createViaEmail;
  const saveUserToDatabase = props.saveUserToDatabase;

  const [emailSelected, setEmailSelected] = useState(false);
  const [google, setGoogle] = useState(false);

  const emailSignUp = () => setEmailSelected(true);
  const googleSignUp = () => setGoogle(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");

  const onSubmitUser = (e) => {
    e.preventDefault();
    if (emailSelected) createViaEmail(email, password, username, displayName);
    if (google) saveUserToDatabase(username, displayName);
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.id === "email") setEmail(e.target.value);
    if (e.target.id === "password") setPassword(e.target.value);
    if (e.target.id === "username") setUsername(e.target.value);
    if (e.target.id === "display-name") setDisplayName(e.target.value);
  };

  return (
    <div id="popup">
      {(() => {
        console.log(google);
        if (emailSelected) {
          return (
            <Email onSubmitUser={onSubmitUser} handleChange={handleChange} />
          );
        } else if (google) {
          return (
            <Google onSubmitUser={onSubmitUser} handleChange={handleChange} />
          );
        } else
          return (
            <SignUp
              googleSignIn={googleSignIn}
              google={googleSignUp}
              email={emailSignUp}
            />
          );
      })()}
    </div>
  );
};

export default Popup;
