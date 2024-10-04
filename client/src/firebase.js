// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-39795.firebaseapp.com",
  projectId: "mern-blog-39795",
  storageBucket: "mern-blog-39795.appspot.com",
  messagingSenderId: "107589397847",
  appId: "1:107589397847:web:eccbb36a65c90d56952212",
  measurementId: "G-X82ELMSE02"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);