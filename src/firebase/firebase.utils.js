// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyBVVh1bC7FKj-8PV8zx-eMrgkSCRVYVbHI",
  authDomain: "crwn-db-12e85.firebaseapp.com",
  projectId: "crwn-db-12e85",
  storageBucket: "crwn-db-12e85.appspot.com",
  messagingSenderId: "255219054639",
  appId: "1:255219054639:web:1db6c9fadd5d629f306eda",
  measurementId: "G-8701BLR1QN",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
