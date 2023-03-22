// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADaD5Q_mjP17FAQA0f5nSQwi_ZCLpqRV8",
  authDomain: "journalapp-252d1.firebaseapp.com",
  projectId: "journalapp-252d1",
  storageBucket: "journalapp-252d1.appspot.com",
  messagingSenderId: "287378296531",
  appId: "1:287378296531:web:98199f66530310e894ce26",
};

// Initialize Firebase
//Objetos para intercatuar con firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
