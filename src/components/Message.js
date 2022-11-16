import React from "react";
import "../style/Feed.css";

const Message = () => {
  const autoGrow = (e) => {
    e.target.style.height = "5px";
    e.target.style.height = e.target.scrollHeight + "px";
  };
  return (
    <form id="tweet">
      <div className="message-container">
        <div className="message-top">
          <textarea
            type="text"
            id="message"
            name="tweet"
            placeholder="What's Happening?"
            onChange={autoGrow}
            maxLength="280"
          ></textarea>
        </div>
        <div className="message-bottom">
          <button type="submit">Tweet</button>
        </div>
      </div>
    </form>
  );
};

export default Message;
