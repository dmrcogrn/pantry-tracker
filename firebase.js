// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0pM4zGxqMMoOJP8iQeWKx5h2STBEobFI",
  authDomain: "hs-pantry-tracker-c78da.firebaseapp.com",
  projectId: "hs-pantry-tracker-c78da",
  storageBucket: "hs-pantry-tracker-c78da.appspot.com",
  messagingSenderId: "639548224429",
  appId: "1:639548224429:web:0d78bca2954f75a17a6724",
  measurementId: "G-B2P8JN3ESV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {app, firestore}