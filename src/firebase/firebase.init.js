// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4EMkm5gsuKkAlDBldPWrLIC5r-_63VIQ",
  authDomain: "coffee-89c30.firebaseapp.com",
  projectId: "coffee-89c30",
  storageBucket: "coffee-89c30.firebasestorage.app",
  messagingSenderId: "116777178861",
  appId: "1:116777178861:web:209f3a99d513f32cff1ee4",
  measurementId: "G-FMK64FLBKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);