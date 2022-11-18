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
    const id = e.currentTarget.parentElement.parentElement.parentElement.id;
    await updateDoc(doc(store, "tweets", id), {
      likes: increment(1),
    });
    refreshFeed();
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
        return tweetsList;
      } catch (err) {
        console.log(err);
      }
    };

    const mergeSort = (array) => {
      if (array.length < 2) return array;
      const half = Math.ceil(array.length / 2);
      const leftHalf = array.splice(0, half);
      const rightHalf = array;
      const sortLeft = mergeSort(leftHalf);
      const sortRight = mergeSort(rightHalf);
      const sortedArray = [];
      while (sortLeft !== [] || sortRight !== []) {
        if (sortLeft[0] === undefined) {
          sortedArray.push.apply(sortedArray, sortRight);
          break;
        }
        if (sortRight[0] === undefined) {
          sortedArray.push.apply(sortedArray, sortLeft);
          break;
        } else {
          const smallNum =
            sortLeft[0].time < sortRight[0].time
              ? sortRight.splice(0, 1)
              : sortLeft.splice(0, 1);
          sortedArray.push.apply(sortedArray, smallNum);
        }
      }
      return sortedArray;
    };

    const orderTweetsByTime = async () => {
      const unorderedTweets = await getTweets();
      const orderedTweets = mergeSort(unorderedTweets);
      console.log(
        mergeSort([
          { time: 123 },
          { time: 1543 },
          { time: 2 },
          { time: 200 },
          { time: 154 },
          { time: 34 },
        ])
      );
      setTweets(orderedTweets);
    };
    orderTweetsByTime();
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
