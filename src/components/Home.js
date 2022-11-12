import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Feed from "./Feed";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Home = ({ setLogin, setDisplayPopup }) => {
  const [userIsSignedIn, setUserIsSignedIn] = useState(false);

  const logOut = () => {
    signOut(getAuth());
  };

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
    <main id="home">
      <Feed />
      <Sidebar />
      {(() => {
        if (!userIsSignedIn)
          return (
            <Footer setLogin={setLogin} setDisplayPopup={setDisplayPopup} />
          );
      })()}
      <div onClick={logOut}>Log Out</div>
    </main>
  );
};

export default Home;
