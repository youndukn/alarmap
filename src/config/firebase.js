// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMWRthM_KHWiyGOIReA5xTvsaQPKMmVRk",
  authDomain: "mapalarm-83628.firebaseapp.com",
  projectId: "mapalarm-83628",
  storageBucket: "mapalarm-83628.appspot.com",
  messagingSenderId: "1021560211067",
  appId: "1:1021560211067:web:fb77ead2b91447039f84de",
  measurementId: "G-JBEPWXJQ2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);