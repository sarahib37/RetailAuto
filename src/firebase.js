// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArIS-oHTqLpQB-Man8Ou6V-hMuX91qGUA",
  authDomain: "retailauto-239a0.firebaseapp.com",
  projectId: "retailauto-239a0",
  storageBucket: "retailauto-239a0.firebasestorage.app",
  messagingSenderId: "318203486194",
  appId: "1:318203486194:web:331e526c79772ffaa6d56b",
  measurementId: "G-TT5SWXQMGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and export it
const db = getFirestore(app);

// Export the Firestore instance
export { db };