import React, { useState } from "react";
import "../style/Popup.css";
import { ReactComponent as GoogleLogo } from "../style/images/google.svg";
import { app } from "../firebase/firebase.config";
import SignUp from "./SignUp";
import Email from "./Email";

const Popup = (props) => {
  const google = props.google;

  const [email, setEmail] = useState(false);

  const emailSignUp = () => setEmail(true);
  //if email is true, then do the sign up thing

  return (
    <div id="popup">
      {(() => {
        console.log(email);
        if (email) {
          return <Email />;
        } else return <SignUp google={google} email={emailSignUp} />;
      })()}
    </div>
  );
};

export default Popup;
