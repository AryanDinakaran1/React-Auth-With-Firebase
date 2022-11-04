// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0aWKQfc2JYwOyUTJoY6557kLMfoA5LKE",
  authDomain: "test-d2898.firebaseapp.com",
  projectId: "test-d2898",
  storageBucket: "test-d2898.appspot.com",
  messagingSenderId: "228302036756",
  appId: "1:228302036756:web:df5ba3ea2a8f5b8c5e2c01",
  measurementId: "G-YYJ9DK2D0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//const analytics = getAnalytics(app);