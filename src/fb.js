import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import 'firebase/compat/firestore'

export const app = firebase.initializeApp({
    "projectId": "cartrack-da6ca",
    "appId": "1:921615349423:web:2e5222d387443310b3465a",
    "storageBucket": "cartrack-da6ca.appspot.com",
    "apiKey": "AIzaSyAaTn7azvjFUomf5NOBMlNmkutlP9dtHjw",
    "authDomain": "cartrack-da6ca.firebaseapp.com",
    "messagingSenderId": "921615349423",
    "measurementId": "G-FGRVJSKCXE"
  });

export  const db = app.firestore();