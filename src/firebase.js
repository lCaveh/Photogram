
import firebase from "firebase";
const config = {
    apiKey: "AIzaSyA7EbE1AAW3aw2sVaFPm1Jm62MRhvR0f4M",
    authDomain: "photogram-46a24.firebaseapp.com",
    databaseURL: "https://photogram-46a24.firebaseio.com",
    projectId: "photogram-46a24",
    storageBucket: "photogram-46a24.appspot.com",
    messagingSenderId: "146176986643"
};
firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
export const postsRef = databaseRef.child("posts");
export const commentsRef = databaseRef.child("comments");
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();