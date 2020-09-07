import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBJogQQP7azKFUXOj7xgl9Xql_9KLXy2fQ",
  authDomain: "crown-shop-d4090.firebaseapp.com",
  databaseURL: "https://crown-shop-d4090.firebaseio.com",
  projectId: "crown-shop-d4090",
  storageBucket: "crown-shop-d4090.appspot.com",
  messagingSenderId: "272434399156",
  appId: "1:272434399156:web:6e6ef76ca531ea8cf394e1",
//   measurementId: "G-GXLP3X9X6J",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithRedirect(provider);
// console.log(auth.signInWithPopup(provider));
export default firebase;
