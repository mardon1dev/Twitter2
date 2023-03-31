
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
	apiKey: "AIzaSyBw9vhWxKDy71BQYNfwGiCCW3f2UQMBVho",
    authDomain: "twitter-5c005.firebaseapp.com",
    projectId: "twitter-5c005",
    storageBucket: "twitter-5c005.appspot.com",
    messagingSenderId: "203375153067",
    appId: "1:203375153067:web:705317a4f7b05b2c9d0cee"
});

const auth = app.auth();
export { auth };
export default app;