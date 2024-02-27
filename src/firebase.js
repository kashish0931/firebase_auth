// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyArBgsPmzCYa4flrmRQiswnaB4ccYFdhM0",

  authDomain: "fire-auth-ec01e.firebaseapp.com",

  projectId: "fire-auth-ec01e",

  storageBucket: "fire-auth-ec01e.appspot.com",

  messagingSenderId: "26814012479",

  appId: "1:26814012479:web:68fa91d7ba44817eed2c8a",

  measurementId: "G-KMYNVC7TK5"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app , auth};

// const analytics = getAnalytics(app);