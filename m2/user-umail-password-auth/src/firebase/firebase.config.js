


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeiyX6r2BtA5K8ybNlw4yO6EJku00aqD4",
  authDomain: "user-email-password-auth-a2849.firebaseapp.com",
  projectId: "user-email-password-auth-a2849",
  storageBucket: "user-email-password-auth-a2849.appspot.com",
  messagingSenderId: "95070271879",
  appId: "1:95070271879:web:df801d831f09b9ae2f7b22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;

// export default app;