import React from "react";
import {
  getAuth,
  //onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  //signOut,
} from "firebase/auth";
import Popup from "./Popup";

const Auth = () => {
  async function googleSignIn() {
    var provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  }

  return (
    <div>
      <Popup google={googleSignIn} />
    </div>
  );
};

export default Auth;
