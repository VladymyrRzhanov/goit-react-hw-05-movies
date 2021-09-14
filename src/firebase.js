// Import the functions you need from the SDKs you need
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAegPeKUvgaOy56AmY7yB5cFH4lybtVDfI",
  authDomain: "trending-films.firebaseapp.com",
  projectId: "trending-films",
  storageBucket: "trending-films.appspot.com",
  messagingSenderId: "905931826243",
  appId: "1:905931826243:web:556429cd2ca564cd7a60f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getAuth(app);
export default db;

// import * as firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

// const config = {
//   apiKey: "AIzaSyAegPeKUvgaOy56AmY7yB5cFH4lybtVDfI",
//   authDomain: "trending-films.firebaseapp.com",
//   projectId: "trending-films",
//   storageBucket: "trending-films.appspot.com",
//   messagingSenderId: "905931826243",
//   appId: "1:905931826243:web:556429cd2ca564cd7a60f6"
// };

// firebase.initializeApp(config);

// export default firebase;