// Import the functions you need from the SDKs you need
import {getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAegPeKUvgaOy56AmY7yB5cFH4lybtVDfI",
  authDomain: "trending-films.firebaseapp.com",
  projectId: "trending-films",
  storageBucket: "trending-films.appspot.com",
  messagingSenderId: "905931826243",
  appId: "1:905931826243:web:556429cd2ca564cd7a60f6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;