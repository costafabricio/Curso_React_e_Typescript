
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_M8XBA-78Bz_9jnF2teIKiOn4wWsPcQU",
  authDomain: "reactlinks-18a2d.firebaseapp.com",
  projectId: "reactlinks-18a2d",
  storageBucket: "reactlinks-18a2d.firebasestorage.app",
  messagingSenderId: "100446865914",
  appId: "1:100446865914:web:8ab0efe53d7a49832efc43",
  measurementId: "G-TBV1BDPBY0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { db, auth }