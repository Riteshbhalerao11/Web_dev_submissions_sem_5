import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC7sPflrbzOe4Nq5kf5XwlDuQetYLLVA6k",
  authDomain: "auth-dev-6d052.firebaseapp.com",
  projectId: "auth-dev-6d052",
  storageBucket: "auth-dev-6d052.appspot.com",
  messagingSenderId: "1012893956686",
  appId: "1:1012893956686:web:42997977768fdf8aaf611f",
});

export const auth = app.auth();
export default app;
