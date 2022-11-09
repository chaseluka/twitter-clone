import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import "../style/App.css";
import Home from "./Home";
//import Profile from "./Profile";
import Auth from "./Auth";
import Banner from "./Banner";

function App() {
  const [displayPopup, setDisplayPopup] = useState(true);

  const togglePopup = () => setDisplayPopup((displayPopup) => !displayPopup);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/profile" element={<Profile />} />*/}
        <Route
          path="/signin"
          element={
            <Auth displayPopup={displayPopup} togglePopup={togglePopup} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
