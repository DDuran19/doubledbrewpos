// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore }  from 'firebase/firestore';
import { getDatabase, ref } from 'firebase/database'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXy1MWGku6Wk3L_vylacs4T1jyLv_CJ-g",
  authDomain: "doubledbrewpos.firebaseapp.com",
  projectId: "doubledbrewpos",
  storageBucket: "doubledbrewpos.appspot.com",
  messagingSenderId: "202787593580",
  appId: "1:202787593580:web:7ac650d4ed3a5662dee749",
  measurementId: "G-DK432F17SV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export const templateData = getDatabase(app);
export const milkteaFlavorsRef = ref(templateData, 'milkteaFlavors');