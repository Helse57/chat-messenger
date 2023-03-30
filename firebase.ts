import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDR_pwXhQEeN9l3-Bi0gMRviQolynC2i4c",
  authDomain: "chat-gpt-messenger-b65b3.firebaseapp.com",
  projectId: "chat-gpt-messenger-b65b3",
  storageBucket: "chat-gpt-messenger-b65b3.appspot.com",
  messagingSenderId: "255403209318",
  appId: "1:255403209318:web:cf9ac295568014648bb3a7",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
