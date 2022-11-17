import React from "react";
import "../style/Sidebar.css";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div className="content-container">
        <div className="news-container">
          <div className="news-top">
            <div className="news-title">What's Happening</div>
          </div>
          <div className="news-bottom">
            <div className="news-item-container">
              <div className="news-item">Elone Muske Buys TwitterClone</div>
              <div className="news-tweeted">300k Tweets</div>
            </div>
            <div className="news-item-container">
              <div className="news-item">Dev</div>
              <div className="news-tweeted">1.89k Tweets</div>
            </div>
          </div>
        </div>
        <div className="sidebar-message-container">
          <div className="sidebar-message">
            *This is a fake application for learning purposes
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
