import React, { useState } from "react";
import "../style/Feed.css";
import { getAuth } from "firebase/auth";
import { query, collection, getDocs, doc, setDoc } from "firebase/firestore";
import { store } from "../firebase/firebase.config";
import uniqid from "uniqid";

const Write = ({ refreshFeed }) => {
  const [tweet, setTweet] = useState("");
  const user = getAuth();

  const autoGrow = (e) => {
    e.target.style.height = "5px";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  const handleChange = (e) => {
    setTweet(e.target.value);
    autoGrow(e);
  };

  const getUserUid = () => user.currentUser.uid;

  const getAllUsers = async () => {
    try {
      const userQuery = query(collection(store, "users"));
      const querySnapshot = await getDocs(userQuery);
      const userList = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        userList.push(data);
      });
      console.log(userList);
      return userList;
    } catch (err) {
      console.log(err);
    }
  };

  const getUserInfo = async () => {
    const users = await getAllUsers();
    return users.filter((user) => {
      if (user.uid === getUserUid()) return user;
      return null;
    });
  };

  async function saveTweetToDatabase(
    displayName,
    username,
    tweet,
    likes,
    time
  ) {
    const id = uniqid();
    try {
      console.log("this ran");
      await setDoc(doc(store, "tweets", id), {
        displayName: displayName,
        username: username,
        tweet: tweet,
        likes: likes,
        time: time,
        id: id,
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  const getTimeStamp = () => Math.floor(Date.now() / 1000);

  const submitTweet = async (e) => {
    e.preventDefault();
    if (tweet !== "") {
      refreshFeed();
      const currentUser = await getUserInfo();
      saveTweetToDatabase(
        currentUser[0].displayName,
        currentUser[0].username,
        tweet,
        0,
        getTimeStamp()
      );
      setTweet("");
    }
  };

  return (
    <form id="tweet" onSubmit={submitTweet}>
      <div className="message-container">
        <div className="message-top">
          <textarea
            type="text"
            id="message"
            name="tweet"
            placeholder="What's Happening?"
            onChange={handleChange}
            maxLength="280"
            value={tweet}
          ></textarea>
        </div>
        <div className="message-bottom">
          <button type="submit">Tweet</button>
        </div>
      </div>
    </form>
  );
};

export default Write;
