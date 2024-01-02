import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAgY2uwOXaj24hkKyY7Rwo_3-Xr9YsR9bw",
  authDomain: "live-chat-12740.firebaseapp.com",
  projectId: "live-chat-12740",
  storageBucket: "live-chat-12740.appspot.com",
  messagingSenderId: "286975456224",
  appId: "1:286975456224:web:e18370e1a3a7a41f1f3185"
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };