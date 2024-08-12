// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-ef57f.firebaseapp.com",
  projectId: "realestate-ef57f",
  storageBucket: "realestate-ef57f.appspot.com",
  messagingSenderId: "756389080989",
  appId: "1:756389080989:web:566b4166dd665a3d098974"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
