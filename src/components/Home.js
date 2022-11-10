import React from "react";
import Feed from "./Feed";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Banner from "./Banner";
const Home = ({ setLogin, setDisplayPopup }) => {
  return (
    <main id="home">
      <Banner />
      <Feed />
      <Sidebar />
      <Footer setLogin={setLogin} setDisplayPopup={setDisplayPopup} />
    </main>
  );
};

export default Home;
