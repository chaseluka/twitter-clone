import React from "react";
import "../style/Tweet.css";
import { ReactComponent as Heart } from "../style/images/heart-outline.svg";

const Tweet = ({ tweets, tweetIsLiked }) => {
  const getTimeStamp = () => Math.floor(Date.now() / 1000);

  const convertTime = (tweetTime) => {
    if (tweetTime !== null) {
      const currentUserTime = getTimeStamp();
      const secondsSinceTweet = currentUserTime - tweetTime;
      const minutesSinceTweet = Math.floor(secondsSinceTweet / 60);
      const hoursSinceTweet = Math.floor(minutesSinceTweet / 60);
      const daysSinceTweet = Math.floor(hoursSinceTweet / 24);
      if (daysSinceTweet >= 1) return `${daysSinceTweet}d`;
      if (hoursSinceTweet >= 1) return `${hoursSinceTweet}h`;
      if (minutesSinceTweet >= 1) return `${minutesSinceTweet}m`;
      return `${secondsSinceTweet}s`;
    }
  };

  return (
    <div id="tweets">
      {tweets.map((tweet) => {
        return (
          <div className="tweet-container" key={tweet.id} id={tweet.id}>
            <div className="tweet-sub-container">
              <div className="tweet-top">
                <div className="display-name">{tweet.displayName}</div>
                <div className="username">@{tweet.username}</div>
                <div className="seperator">•</div>
                <div className="time">{convertTime(tweet.time)}</div>
              </div>
              <div className="tweet-middle">
                <div className="tweet-message">{tweet.tweet}</div>
              </div>
              <div className="tweet-bottom">
                <div className="likes" onClick={() => tweetIsLiked()}>
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
