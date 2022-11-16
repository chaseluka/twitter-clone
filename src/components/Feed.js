import React, { useState, useEffect } from "react";
import "../style/Feed.css";
import Tweet from "./Tweet";
import Message from "./Message";
import { query, collection, getDocs } from "firebase/firestore";
import { store } from "../firebase/firebase.config";

const Feed = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const retrieveCharacters = async () => {
      try {
        const tweetsQuery = query(collection(store, "tweets"));
        const querySnapshot = await getDocs(tweetsQuery);
        const tweetsList = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          tweetsList.push(data);
        });
        setTweets(tweetsList);
      } catch (err) {
        console.log(err);
      }
    };
    retrieveCharacters();
  });

  return (
    <div id="feed">
      <div className="feed-title-container">
        <div className="feed-title">Home</div>
      </div>
      <div className="feed-container">
        <Message />
        <div className="feed-body">
          <Tweet tweets={tweets} />
        </div>
      </div>
    </div>
  );
};

export default Feed;
