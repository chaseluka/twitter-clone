import React, { useState, useEffect } from "react";
import "../style/Feed.css";
import Tweet from "./Tweet";
import Write from "./Write";
import {
  query,
  collection,
  getDocs,
  updateDoc,
  doc,
  increment,
} from "firebase/firestore";
import { store } from "../firebase/firebase.config";

const Feed = () => {
  const [tweets, setTweets] = useState([]);
  const [toggleFeed, setToggleFeed] = useState(false);

  const refreshFeed = () => setToggleFeed((toggleFeed) => !toggleFeed);

  const tweetIsLiked = async (e) => {
    const id = e.target.id;
    console.log(id);
    await updateDoc(doc(store, "tweets", id), {
      likes: increment(1),
    });
  };

  useEffect(() => {
    const getTweets = async () => {
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
    getTweets();
  }, [toggleFeed]);

  return (
    <div id="feed">
      <div className="feed-title-container">
        <div className="feed-title">Home</div>
      </div>
      <div className="feed-container">
        <Write refreshFeed={refreshFeed} />
        <div className="feed-body">
          <Tweet tweets={tweets} tweetIsLiked={tweetIsLiked} />
        </div>
      </div>
    </div>
  );
};

export default Feed;
