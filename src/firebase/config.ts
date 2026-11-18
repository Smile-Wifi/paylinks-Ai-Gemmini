import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "paylinks-ph.firebaseapp.com",
  projectId: "paylinks-ph",
  storageBucket: "paylinks-ph.firebasestorage.app",
  messagingSenderId: "28334603268",
  appId: "YOUR_APP_ID"
};

export const app = initializeApp(firebaseConfig);
