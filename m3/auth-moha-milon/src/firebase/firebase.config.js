

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhAajPKHwVyI-OwHxJlKrHuBK_NL53W5I",
  authDomain: "auth-moha-milon-c8e59.firebaseapp.com",
  projectId: "auth-moha-milon-c8e59",
  storageBucket: "auth-moha-milon-c8e59.appspot.com",
  messagingSenderId: "436109489869",
  appId: "1:436109489869:web:abe2b406d80ee276a45b84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;