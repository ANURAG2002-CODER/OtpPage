// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6PVYEp7j9jpwTEGsN52kzursr4MXw0u8",
  authDomain: "helpymoto.firebaseapp.com",
  projectId: "helpymoto",
  storageBucket: "helpymoto.appspot.com",
  messagingSenderId: "73302857760",
  appId: "1:73302857760:web:1489a97376c325c0470445",
  measurementId: "G-F99DDRLFD3"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else{
    app=firebase.app()
}
const auth=firebase.auth()
const analytics = getAnalytics(app);
export {auth};