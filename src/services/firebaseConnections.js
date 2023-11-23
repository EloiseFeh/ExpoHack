import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCJpjEHayCt8XNGXXDpHyO55bHch8OetZU",
    authDomain: "campo-conecta.firebaseapp.com",
    projectId: "campo-conecta",
    storageBucket: "campo-conecta.appspot.com",
    messagingSenderId: "730517648382",
    appId: "1:730517648382:web:3eacf8009e876749f306af",
    measurementId: "G-3JYH0T3X63"
};

const firebaseApp = initializeApp(firebaseConfig);

const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const storage = getStorage(firebaseApp);

export { firebaseApp, analytics, db, auth, storage };