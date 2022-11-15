import React from "react";
import { ReactComponent as HomeLogo } from "../style/images/home.svg";
import { ReactComponent as TwitterLogo } from "../style/images/twitter.svg";
import { ReactComponent as Exit } from "../style/images/exit-to-app.svg";
import "../style/Banner.css";

const Banner = ({ logOut, userIsSignedIn }) => {
  return (
    <div id="banner" className="border">
      <div className="banner-container">
        <div className="banner-sub-container">
          <div className="banner-top">
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

          {(() => {
            if (userIsSignedIn)
              return (
                <div className="banner-element" onClick={() => logOut()}>
                  <div className="tab">
                    <Exit />
                    <div className="tab-title">Log Out</div>
                  </div>
                </div>
              );
          })()}
        </div>
      </div>
    </div>
  );
};

export default Banner;
