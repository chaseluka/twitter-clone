import React from "react";
import { ReactComponent as HomeLogo } from "../style/images/home.svg";
import { ReactComponent as TwitterLogo } from "../style/images/twitter.svg";
import "../style/Banner.css";

const Banner = () => {
  return (
    <div id="banner" className="border">
      <div className="banner-container">
        <div className="banner-element">
          <TwitterLogo />
        </div>
        <div className="banner-element">
          <div className="tab">
            <HomeLogo />
            <div className="tab-title">Home</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
