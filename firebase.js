/// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw9lJ-QWsF7oG0CICwWb0HxLnEyQt0n5E",
  authDomain: "programadorweb-de6a3.firebaseapp.com",
  databaseURL: "https://programadorweb-de6a3-default-rtdb.firebaseio.com",
  projectId: "programadorweb-de6a3",
  storageBucket: "programadorweb-de6a3.appspot.com",
  messagingSenderId: "942058974460",
  appId: "1:942058974460:web:5f44bc81daabe94dfd7b79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js"
// Get a reference to the database service
const db = getDatabase(app);
console.log(db)
console.log(ref)
