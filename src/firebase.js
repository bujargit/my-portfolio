import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAjxRwrpBcmiiRN38Ry3tgsa8PfTdIdCbA",
  authDomain: "auth-development-cb65b.firebaseapp.com",
  databaseURL: "https://auth-development-cb65b-default-rtdb.firebaseio.com",
  projectId: "auth-development-cb65b",
  storageBucket: "auth-development-cb65b.appspot.com",
  messagingSenderId: "1066542541235",
  appId: "1:1066542541235:web:490b2ebe68d0b8152e03c6"
});

export const auth = app.auth();
export default app;
