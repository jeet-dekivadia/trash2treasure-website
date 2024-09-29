import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSbRaaG2nDvOL_czv2yObWz8xxWiBKbig",
  authDomain: "trash2treasure-website.firebaseapp.com",
  projectId: "trash2treasure-website",
  storageBucket: "trash2treasure-website.appspot.com",
  messagingSenderId: "857462004645",
  appId: "1:857462004645:web:b21774d9ae0461db1c264c",
  measurementId: "G-7VYKW2B8BX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
