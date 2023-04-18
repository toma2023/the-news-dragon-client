// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD34L2QOsnyfHX7qJLyZNTacAAUQu-5NLY",
  authDomain: "the-news-dragon-a15e3.firebaseapp.com",
  projectId: "the-news-dragon-a15e3",
  storageBucket: "the-news-dragon-a15e3.appspot.com",
  messagingSenderId: "781636799797",
  appId: "1:781636799797:web:8ffd3ac583ad581243507c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;