// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI36KWMMYpS7GJEdj6hA0gP3w4aiTaeGg",
  authDomain: "schoolexama.firebaseapp.com",
  projectId: "schoolexama",
  storageBucket: "schoolexama.appspot.com",
  messagingSenderId: "591585169358",
  appId: "1:591585169358:web:ab6a8da47b8a32a5c6259f",
  measurementId: "G-FKPF7ZCY6Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
