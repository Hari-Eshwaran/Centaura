// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4ygAVsbrMzhTqT5JExYYen41pXyWpA4c",
  authDomain: "centaura-969ff.firebaseapp.com",
  projectId: "centaura-969ff",
  storageBucket: "centaura-969ff.firebasestorage.app",
  messagingSenderId: "885330632715",
  appId: "1:885330632715:web:d97459d2d70bb163d3a70e",
  measurementId: "G-J1Z61Z0MHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export { app };