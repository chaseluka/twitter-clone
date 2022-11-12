import React, { useState } from "react";
import "../style/App.css";
import Home from "./Home";
import Auth from "./Auth";
import Banner from "./Banner";

function App() {
  const [displayPopup, setDisplayPopup] = useState(false);
  const [login, setLogin] = useState(true);

  const togglePopup = () => setDisplayPopup((displayPopup) => !displayPopup);
  //allow click on login or sign up to show the authentication view.

  return (
    <div className="app-container">
      <Banner />
      <Home setLogin={setLogin} setDisplayPopup={setDisplayPopup} />
      <Auth
        displayPopup={displayPopup}
        togglePopup={togglePopup}
        login={login}
      />
      ;
    </div>
  );
}

export default App;
