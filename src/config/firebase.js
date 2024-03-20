import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKvwbwaqfgfHzGmhC0GzLIHaKpI5VNpuM",
  authDomain: "fir-react-auth-7de30.firebaseapp.com",
  projectId: "fir-react-auth-7de30",
  storageBucket: "fir-react-auth-7de30.appspot.com",
  messagingSenderId: "899631729646",
  appId: "1:899631729646:web:9877d402a8eb915e671cff",
  measurementId: "G-LGJZE2Y3NQ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
