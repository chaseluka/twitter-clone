import React, { useEffect, useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  //onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  //signOut,
} from "firebase/auth";
import { collection, addDoc, query, getDocs } from "firebase/firestore";
import Popup from "./Popup";
import { store } from "../firebase/firebase.config";

const Auth = ({ displayPopup, togglePopup, login }) => {
  const [users, setUsers] = useState([]);
  const emailInUse = useRef(true);
  const invalidEmail = useRef(false);
  const wrongPassword = useRef(false);
  const someError = useRef(false);

  useEffect(() => {
    const retrieveCharacters = async () => {
      try {
        const usersQuery = query(collection(store, "users"));
        const querySnapshot = await getDocs(usersQuery);
        const usersFromDB = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          usersFromDB.push(data);
        });
        setUsers(usersFromDB);
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
  //pick up below this tomorrow
  const createUser = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      emailInUse.current = false;
    } catch (error) {
      if (error.message === "Firebase: Error (auth/email-already-in-use).")
        emailInUse.current = true;
    }
  };

  const signUserIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      invalidEmail.current = false;
      wrongPassword.current = false;
    } catch (error) {
      console.log(error.message);
      if (error.message === "Firebase: Error (auth/invalid-email).")
        invalidEmail.current = true;
      if (error.message === "Firebase: Error (auth/wrong-password).")
        wrongPassword.current = true;
      else someError.current = true;
    }
  };

  const noOtherErrors = () => (someError.current ? false : true);

  const emailIsAvailable = () => (emailInUse.current ? false : true);

  const emailIsValid = () => (invalidEmail.current ? false : true);

  const passwordIsCorrect = () => (wrongPassword.current ? false : true);

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
      {(() => {
        if (displayPopup)
          return (
            <Popup
              googleSignIn={googleSignIn}
              createViaEmail={createUser}
              saveUserToDatabase={saveUserToDatabase}
              usernameIsAvailable={usernameIsAvailable}
              emailIsAvailable={emailIsAvailable}
              signUserIn={signUserIn}
              emailIsValid={emailIsValid}
              passwordIsCorrect={passwordIsCorrect}
              noOtherErrors={noOtherErrors}
              togglePopup={togglePopup}
              login={login}
            />
          );
      })()}
    </div>
  );
};

export default Auth;
