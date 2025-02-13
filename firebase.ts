// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNv3Bq5wqpiHbDh1XalXiK4Oj7R0vM1WU",
  authDomain: "nextnotes-bc224.firebaseapp.com",
  projectId: "nextnotes-bc224",
  storageBucket: "nextnotes-bc224.firebasestorage.app",
  messagingSenderId: "574154238511",
  appId: "1:574154238511:web:49232fefd7d055f3cd34da",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFireStore(app);

export { db };
