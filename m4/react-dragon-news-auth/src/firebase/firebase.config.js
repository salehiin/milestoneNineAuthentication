// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3wbhhS3Ep8E6r98fBsvCMrVr01g0Bwho",
  authDomain: "react-dragon-news-auth-85cfb.firebaseapp.com",
  projectId: "react-dragon-news-auth-85cfb",
  storageBucket: "react-dragon-news-auth-85cfb.firebasestorage.app",
  messagingSenderId: "1076141325580",
  appId: "1:1076141325580:web:ecf4a4a09d5a9a4c1a5d29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;