// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKQD-OqUvksg-jprIvf8no5EGEtAGpx68",
  authDomain: "sivani-baiju.firebaseapp.com",
  projectId: "sivani-baiju",
  storageBucket: "sivani-baiju.appspot.com",
  messagingSenderId: "822844046047",
  appId: "1:822844046047:web:0bd125a16907101a83876a",
  measurementId: "G-EBXWQB8ZWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);