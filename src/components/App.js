import React, { useState, useEffect } from "react";
import "../style/App.css";
import Home from "./Home";
import Auth from "./Auth";
import Banner from "./Banner";
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [displayPopup, setDisplayPopup] = useState(false);
  const [login, setLogin] = useState(true);

  const togglePopup = () => setDisplayPopup((displayPopup) => !displayPopup);
  //allow click on login or sign up to show the authentication view.

  const logOut = () => {
    signOut(getAuth());
  };

  const [userIsSignedIn, setUserIsSignedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setUserIsSignedIn(true);
      } else {
        setUserIsSignedIn(false);
      }
    });
  });

  return (
    <div className="app-container">
      <Banner logOut={logOut} userIsSignedIn={userIsSignedIn} />
      <Home
        setLogin={setLogin}
        setDisplayPopup={setDisplayPopup}
        userIsSignedIn={userIsSignedIn}
      />
      <Auth
        displayPopup={displayPopup}
        togglePopup={togglePopup}
        login={login}
      />
    </div>
  );
}

export default App;
