// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC66nZULwioRU8O-__08ZSYgusMlt7z0Qw",
    authDomain: "react-twitter-ccbc5.firebaseapp.com",
    projectId: "react-twitter-ccbc5",
    storageBucket: "react-twitter-ccbc5.appspot.com",
    messagingSenderId: "187997729222",
    appId: "1:187997729222:web:359b825a2b8dc171c942c7",
    measurementId: "G-CB9P74XDVP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;