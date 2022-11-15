import React from "react";
import Feed from "./Feed";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import "../style/Home.css";

const Home = ({ setLogin, setDisplayPopup, userIsSignedIn }) => {
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
    </main>
  );
};

export default Home;
