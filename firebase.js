// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHRRdVwbbj0I6rmT3ghOaPSN12IiNE1IM",
  authDomain: "mAIzaSyAHRRdVwbbj0I6rmT3ghOaPSN12IiNE1IMemoire-map1122.firebaseapp.com",
  projectId: "memoire-map1122",
  storageBucket: "memoire-map1122.firebasestorage.app",
  messagingSenderId: "569088820440",
  appId: "1:569088820440:web:4e00cbcede08f5d64583ad",
  measurementId: "G-DFD3NBQPMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);