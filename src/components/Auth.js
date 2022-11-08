import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  //onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  //signOut,
} from "firebase/auth";
import { collection, addDoc, query, getDocs } from "firebase/firestore";
import Popup from "./Popup";
import { store } from "../firebase/firebase.config";

const Auth = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const retrieveCharacters = async () => {
      try {
        const usersQuery = query(collection(store, "users"));
        const querySnapshot = await getDocs(usersQuery);
        const usersFromData = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          usersFromData.push(data);
        });
        setUsers(usersFromData);
      } catch (err) {
        console.log(err);
      }
    };
    retrieveCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const auth = getAuth();
  async function googleSignIn() {
    var provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }

  const createUser = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserUid = () => getAuth().currentUser.uid;

  const usernameIsAvailable = (username) =>
    users.every((user) => user.username !== username);

  async function saveUserToDatabase(username, displayName) {
    try {
      await addDoc(collection(store, "users"), {
        uid: getUserUid(),
        username: username,
        displayName: displayName,
      });
    } catch (error) {
      return error;
    }
  }

  return (
    <div>
      <Popup
        googleSignIn={googleSignIn}
        createViaEmail={createUser}
        saveUserToDatabase={saveUserToDatabase}
        usernameIsAvailable={usernameIsAvailable}
      />
    </div>
  );
};

export default Auth;
