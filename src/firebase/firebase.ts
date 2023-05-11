// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqQhVfOVVMX2FwGFFLseIR6GFl83X9_RM",
  authDomain: "gym-routine-2b8bd.firebaseapp.com",
  databaseURL: "https://gym-routine-2b8bd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gym-routine-2b8bd",
  storageBucket: "gym-routine-2b8bd.appspot.com",
  messagingSenderId: "718487030861",
  appId: "1:718487030861:web:24210958f0e18be0c4e004",
  measurementId: "G-KXT72GH07R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
