// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq6RSGlUMxz6QMaRXqNDO68v5pTLQWWF4",
  authDomain: "todoapp-821d5.firebaseapp.com",
  projectId: "todoapp-821d5",
  storageBucket: "todoapp-821d5.appspot.com",
  messagingSenderId: "484972786967",
  appId: "1:484972786967:web:337ffcd38cc0a0bbd0b352",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
