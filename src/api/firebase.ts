import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBiqGpKXFb9djae4D2xx2NMbzMYj5CBUSA",
    authDomain: "rcrd-website.firebaseapp.com",
    projectId: "rcrd-website",
    storageBucket: "rcrd-website.firebasestorage.app",
    messagingSenderId: "227924516950",
    appId: "1:227924516950:web:8934492767a843145adbf7",
    measurementId: "G-K4ZNYGE9JP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };
