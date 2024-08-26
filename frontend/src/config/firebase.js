// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase configuration (replace with your actual config)
const firebaseConfig = {
    apiKey: "AIzaSyARDNYiQUy7KLXXW6UzZQeQE92OBN7kaW0",
    authDomain: "siteassit-otp.firebaseapp.com",
    projectId: "siteassit-otp",
    storageBucket: "siteassit-otp.appspot.com",
    messagingSenderId: "457191652201",
    appId: "1:457191652201:web:937949d5404dd2dd055bf8",
    measurementId: "G-X74T5MYPQ2"
  };
  
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
