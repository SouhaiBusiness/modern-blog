// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "modernblog2.firebaseapp.com",
  projectId: "modernblog2",
  storageBucket: "modernblog2.firebasestorage.app",
  messagingSenderId: "21200206629",
  appId: "1:21200206629:web:c02b649bbfc0e70fcc78cc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

