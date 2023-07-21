/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: import.meta.env.REACT_APP_FIREBASE_APP_ID,
};

console.log(import.meta.env.VITE_FIREBASE_API_KEY);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const database = db;
export default app;
