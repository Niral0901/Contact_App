// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEP_OY_U4_vw4bpsP-gzmYdpEVKRdDDjI",
  authDomain: "vite-contact-b60cf.firebaseapp.com",
  projectId: "vite-contact-b60cf",
  storageBucket: "vite-contact-b60cf.appspot.com",
  messagingSenderId: "157172599488",
  appId: "1:157172599488:web:7f68ae87eee1cc05023b25"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);