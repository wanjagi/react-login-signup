// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxONynp3bOvFfKurXjTtgwpeujwqSHzDk",
  authDomain: "login-auth-8f2ec.firebaseapp.com",
  projectId: "login-auth-8f2ec",
  storageBucket: "login-auth-8f2ec.appspot.com",
  messagingSenderId: "667648881437",
  appId: "1:667648881437:web:e716bd1a57037a1cf667f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export getAuth to help register users
export const auth=getAuth();
export const db=getFirestore(app)
export default app;