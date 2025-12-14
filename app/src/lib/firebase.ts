
// This is a placeholder file. The Firebase config will be populated by the backend.
// You can learn more about initializing Firebase here: https://firebase.google.com/docs/web/setup
import { initializeApp, getApps } from "firebase/app";

export const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
