import React, { useState } from "react";
import "../style/Feed.css";
import Tweet from "./Tweet";

const Feed = () => {
  const [tweets, setTweets] = useState([
    {
      displayName: "Joe Cool",
      username: "joeiscool",
      tweet:
        "I think Im pretty cool dont you my good freind I think we ought to consider this together",
      likes: 2,
      time: "12d",
    },
    {
      displayName: "Joe Cool",
      username: "joeiscool",
      tweet:
        "I think Im pretty cool dont you my good freind I think we ought to consider this together",
      likes: 2,
      time: "12d",
    },
    {
      displayName: "Joe Cool",
      username: "joeiscool",
      tweet:
        "I think Im pretty cool dont you my good freind I think we ought to consider this together",
      likes: 2,
      time: "12d",
    },
    {
      displayName: "Joe Cool",
      username: "joeiscool",
      tweet:
        "I think Im pretty cool dont you my good freind I think we ought to consider this together",
      likes: 2,
      time: "12d",
    },
    {
      displayName: "Joe Cool",
      username: "joeiscool",
      tweet:
        "I think Im pretty cool dont you my good freind I think we ought to consider this together",
      likes: 2,
      time: "12d",
    },
    {
      displayName: "Joe Cool",
      username: "joeiscool",
      tweet:
        "I think Im pretty cool dont you my good freind I think we ought to consider this together",
      likes: 2,
      time: "12d",
    },
    {
      displayName: "Joe Cool",
      username: "joeiscool",
      tweet:
        "I think Im pretty cool dont you my good freind I think we ought to consider this together",
      likes: 2,
      time: "12d",
    },
    {
      displayName: "Joe Cool",
      username: "joeiscool",
      tweet:
        "I think Im pretty cool dont you my good freind I think we ought to consider this together",
      likes: 2,
      time: "12d",
    },
    {
      displayName: "Joe Cool",
      username: "joeiscool",
      tweet:
        "I think Im pretty cool dont you my good freind I think we ought to consider this together",
      likes: 2,
      time: "12d",
    },
    {
      displayName: "Joe Cool",
      username: "joeiscool",
      tweet:
        "I think Im pretty cool dont you my good freind I think we ought to consider this together",
      likes: 2,
      time: "12d",
    },
    {
      displayName: "Joe Cool",
      username: "joeiscool",
      tweet:
        "I think Im pretty cool dont you my good freind I think we ought to consider this together",
      likes: 2,
      time: "12d",
    },
    {
      displayName: "Joe Cool",
      username: "joeiscool",
      tweet:
        "I think Im pretty cool dont you my good freind I think we ought to consider this together",
      likes: 2,
      time: "12d",
    },
  ]);

  const autoGrow = (e) => {
    e.target.style.height = "5px";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <div id="feed">
      <div className="feed-title-container">
        <div className="feed-title">Home</div>
      </div>
      <div className="feed-container">
        <form id="tweet">
          <div className="message-container">
            <div className="message-top">
              <textarea
                type="text"
                id="message"
                name="tweet"
                placeholder="What's Happening?"
                onChange={autoGrow}
              ></textarea>
            </div>
            <div className="message-bottom">
              <button type="submit">Tweet</button>
            </div>
          </div>
        </form>
        <div className="feed-body">
          <Tweet tweets={tweets} />
        </div>
      </div>
    </div>
  );
};

export default Feed;
