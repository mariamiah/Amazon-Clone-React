import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD2u9k0tMZ1vkvbU1RzfX3Fl-YEIYN-eCA",
    authDomain: "clone-d67b9.firebaseapp.com",
    databaseURL: "https://clone-d67b9.firebaseio.com",
    projectId: "clone-d67b9",
    storageBucket: "clone-d67b9.appspot.com",
    messagingSenderId: "1065258720771",
    appId: "1:1065258720771:web:3f5c1a82c01b5213387836",
    measurementId: "G-L3PQCLQ8TG"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };