// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUjg57_Mp06SonLDIQLzPlzRBXqtncFBc",
  authDomain: "inventory-management-4bc38.firebaseapp.com",
  projectId: "inventory-management-4bc38",
  storageBucket: "inventory-management-4bc38.appspot.com",
  messagingSenderId: "526695012382",
  appId: "1:526695012382:web:54ace8ed7199998cd1760f",
  measurementId: "G-ZJXXMR4LWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export {firestore}; 
