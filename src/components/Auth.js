import React from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  //onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  //signOut,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import Popup from "./Popup";
import { store } from "../firebase/firebase.config";

const Auth = () => {
  const auth = getAuth();
  async function googleSignIn() {
    var provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }

  const createUser = async (email, password, username, displayName) => {
    await createUserWithEmailAndPassword(auth, email, password);
    saveUserToDatabase(username, displayName);
  };

  const getUserUid = () => getAuth().currentUser.uid;

  async function saveUserToDatabase(username, displayName) {
    try {
      await addDoc(collection(store, "users"), {
        uid: getUserUid(),
        username: username,
        displayName: displayName,
      });
    } catch (error) {
      console.error("Error writing new message to Firebase Database", error);
    }
  }

  return (
    <div>
      <Popup
        google={googleSignIn}
        createViaEmail={createUser}
        saveUserToDatabase={saveUserToDatabase}
      />
    </div>
  );
};

export default Auth;
