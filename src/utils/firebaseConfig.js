// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxcSBFOTujijvqLkzR61AIlI0oFYaKLr8",
  authDomain: "padelmania-beef6.firebaseapp.com",
  projectId: "padelmania-beef6",
  storageBucket: "padelmania-beef6.appspot.com",
  messagingSenderId: "494987639024",
  appId: "1:494987639024:web:dd34574342eb6013f72a35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Firestore
const db = getFirestore(app)

export default db