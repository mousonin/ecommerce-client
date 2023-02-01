// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT8geM0sR70ZZlzqyoFNNr_AXkWszBPIU",
  authDomain: "react-ecommerce-e78ea.firebaseapp.com",
  projectId: "react-ecommerce-e78ea",
  storageBucket: "react-ecommerce-e78ea.appspot.com",
  messagingSenderId: "704529615228",
  appId: "1:704529615228:web:7408b77261a0aa800c7cf9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
