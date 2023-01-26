import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBEdpnla3P7nSZYxUopsYEJiZlSyV5D9UI",
    authDomain: "ecommerce-14b5c.firebaseapp.com",
    projectId: "ecommerce-14b5c",
    storageBucket: "ecommerce-14b5c.appspot.com",
    messagingSenderId: "522608541553",
    appId: "1:522608541553:web:12513dbe8a3017c61680d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;