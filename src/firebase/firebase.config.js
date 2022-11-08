// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByL3RNk3LAnQKgsHo1Zu1ucOGFvpYrm4A",
  authDomain: "twitterclone-641f5.firebaseapp.com",
  projectId: "twitterclone-641f5",
  storageBucket: "twitterclone-641f5.appspot.com",
  messagingSenderId: "586160756716",
  appId: "1:586160756716:web:aea6c9c811ce5963b492c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const store = getFirestore(app);
