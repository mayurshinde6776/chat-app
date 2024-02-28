import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCxWl7bYxP1p3PmZPVKGVMMJNgjsG78zYc",
    authDomain: "chat-app-984b6.firebaseapp.com",
    projectId: "chat-app-984b6",
    storageBucket: "chat-app-984b6.appspot.com",
    messagingSenderId: "1093569346679",
    appId: "1:1093569346679:web:a517c5b3d81c8b11889a72",
    measurementId: "G-ERTLVWFZG8"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth();

// Create a root reference
export const storage = getStorage();
export const db= getFirestore();