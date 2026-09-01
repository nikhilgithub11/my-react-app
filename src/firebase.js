import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxktdpjbdDJKyOyGbGU_OT5ZAquKX2dMw",
  authDomain: "my-react-app-9be91.firebaseapp.com",
  projectId: "my-react-app-9be91",
  storageBucket: "my-react-app-9be91.firebasestorage.app",
  messagingSenderId: "252834674570",
  appId: "1:252834674570:web:49b92434911dabc4fa7a73"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };