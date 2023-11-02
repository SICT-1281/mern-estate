// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-cfde2.firebaseapp.com",
  projectId: "mern-estate-cfde2",
  storageBucket: "mern-estate-cfde2.appspot.com",
  messagingSenderId: "601898838707",
  appId: "1:601898838707:web:0c6b753935edf8442a5ec6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);