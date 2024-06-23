// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCBLjtmpDYgaL0s_rNeplvwAjFfr1HupjY",
  authDomain: "ecomm-7b2c3.firebaseapp.com",
  projectId: "ecomm-7b2c3",
  storageBucket: "ecomm-7b2c3.appspot.com",
  messagingSenderId: "619040623965",
  appId: "1:619040623965:web:f11d749eb3a8f535d52cb4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
export {auth,db}