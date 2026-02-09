
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBjUOKRaEvSYp4kYp2kfR8y7EZJHnOAPFA",
  authDomain: "webcarros-319d1.firebaseapp.com",
  projectId: "webcarros-319d1",
  storageBucket: "webcarros-319d1.firebasestorage.app",
  messagingSenderId: "1026574036676",
  appId: "1:1026574036676:web:11e167798b9a3c7243a391",
  measurementId: "G-YFNYFCR20H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);