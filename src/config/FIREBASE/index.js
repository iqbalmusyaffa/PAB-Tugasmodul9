import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyDp8mGGRgsTN766EoEFmo4HAJIcJNDP7eI",
    authDomain: "tugaskuy-66276.firebaseapp.com",
    databaseURL: "https://tugaskuy-66276-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tugaskuy-66276",
    storageBucket: "tugaskuy-66276.appspot.com",
    messagingSenderId: "786434859782",
    appId: "1:786434859782:web:0a5afdf91018866bbe7487"
});

const FIREBASE = firebase;

export default FIREBASE;