// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  authDomain: "uplight-menu.firebaseapp.com",
  projectId: "uplight-menu",
  storageBucket: "uplight-menu.appspot.com",
  messagingSenderId: "706713435273",
  appId: "1:706713435273:web:ec4891d0ff58b3be401a58",
  measurementId: "G-YDP7DC6RFZ"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()

export default db