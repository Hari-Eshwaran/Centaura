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
  apiKey: "AIzaSyChg7bGhqBX_gw9lrGUVIvxdN6cD4PNudM",
  authDomain: "wealth-map-df0e8.firebaseapp.com",
  projectId: "wealth-map-df0e8",
  storageBucket: "wealth-map-df0e8.firebasestorage.app",
  messagingSenderId: "15224391441",
  appId: "1:15224391441:web:7f3be36e8bf937ce9b6eb0",
  measurementId: "G-F69KD0N554"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export { app };