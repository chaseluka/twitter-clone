import React from "react";
import Feed from "./Feed";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <main id="home">
      <Feed />
      <Sidebar />
    </main>
  );
};

export default Home;
