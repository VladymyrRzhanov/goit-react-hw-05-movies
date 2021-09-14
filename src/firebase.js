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
export const firebase = initializeApp(firebaseConfig);