import firebase from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyAFy8TGAMnC62KddBf6sdAHXolMnfVSVyY",
  authDomain: "nc-news-18533.firebaseapp.com",
  projectId: "nc-news-18533",
  storageBucket: "nc-news-18533.appspot.com",
  messagingSenderId: "898933405821",
  appId: "1:898933405821:web:43c6286a1ece417b47d914",
  measurementId: "G-WVPX82WDYM",
});

export const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log("logged in");
  } else {
    console.log("no user");
  }
});
