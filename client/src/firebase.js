// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-a74b7.firebaseapp.com",
  projectId: "mern-blog-a74b7",
  storageBucket: "mern-blog-a74b7.appspot.com",
  messagingSenderId: "380921823161",
  appId: "1:380921823161:web:21ca66ffbdedbf9cdc4068",
};

// Initialize Firebaseexport
export const app = initializeApp(firebaseConfig);
