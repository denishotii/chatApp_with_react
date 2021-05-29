import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxxxxxxxxxxxx",
    measurementId: "xxxxxxxxxxx"
  }).auth();