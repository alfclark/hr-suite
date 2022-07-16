import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDbwOUMvf61yudX9TZQUfcJWplcOPgFBwU",
  authDomain: "practica-sps.firebaseapp.com",
  projectId: "practica-sps",
  storageBucket: "practica-sps.appspot.com",
  messagingSenderId: "329088102134",
  appId: "1:329088102134:web:0e40a7dbeea89a62c606d7"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore()