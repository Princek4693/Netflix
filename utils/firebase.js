// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxpOa3ftaEjv1IOomTeK_RlYze37tntOs",
  authDomain: "netflixgpt-2e4a1.firebaseapp.com",
  projectId: "netflixgpt-2e4a1",
  storageBucket: "netflixgpt-2e4a1.appspot.com",
  messagingSenderId: "872632314080",
  appId: "1:872632314080:web:efdb9782d767646e688885",
  measurementId: "G-7VKKM3QK5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
