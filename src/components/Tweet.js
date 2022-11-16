import React from "react";
import "../style/Tweet.css";
import { ReactComponent as Heart } from "../style/images/heart-outline.svg";

const Tweet = ({ tweets }) => {
  return (
    <div id="tweets">
      {tweets.map((tweet) => {
        return (
          <div className="tweet-container">
            <div className="tweet-sub-container">
              <div className="tweet-top">
                <div className="display-name">{tweet.displayName}</div>
                <div className="username">@{tweet.username}</div>
                <div className="seperator">•</div>
                <div className="time">{tweet.time}</div>
              </div>
              <div className="tweet-middle">
                <div className="tweet-message">{tweet.tweet}</div>
              </div>
              <div className="tweet-bottom">
                <div className="likes">
                  <Heart />
                  <div className="like-amount">{tweet.likes}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tweet;
