// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3OfSUnGbIiSY5NsyGDYvD4ezXPsyjsLU",
  authDomain: "instagram-clone-61309.firebaseapp.com",
  projectId: "instagram-clone-61309",
  storageBucket: "instagram-clone-61309.appspot.com",
  messagingSenderId: "818981648157",
  appId: "1:818981648157:web:8775a4b94bf003cbfd13f4",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
