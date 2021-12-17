// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/database";
//import { getAnalytics } from "firebase/analytics";
//import Rebase from 're-base'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoy8fvUKOqvq9RUjelmPR3km48k0Z3g-A",
  authDomain: "crud-148fa.firebaseapp.com",
  projectId: "crud-148fa",
  storageBucket: "crud-148fa.appspot.com",
  messagingSenderId: "235504173238",
  appId: "1:235504173238:web:d5c65c23aa36ce8bdba617",
  measurementId: "G-1QS003WDZG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(firebase);

//const firebase = Rebase.createClass(app.database());

//export {app};
export default firebase;