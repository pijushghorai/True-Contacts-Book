// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKbgeNgosFY-ME5_dnQdP7DWkBMiPeYk4",
  authDomain: "true-contacts-4650c.firebaseapp.com",
  projectId: "true-contacts-4650c",
  storageBucket: "true-contacts-4650c.appspot.com",
  messagingSenderId: "835270090717",
  appId: "1:835270090717:web:ac3b7f9db7297d6cb9e034"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);