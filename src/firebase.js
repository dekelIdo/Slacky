import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDeaR5xf0MQSGEzFisgDdnfUzWV2LnMYJU",
  authDomain: "slacky-proj.firebaseapp.com",
  projectId: "slacky-proj",
  storageBucket: "slacky-proj.appspot.com",
  messagingSenderId: "95606665523",
  appId: "1:95606665523:web:4e5087d7f75329590c0e46",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider }
