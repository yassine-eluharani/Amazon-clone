import firebase from 'firebase'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDcCxIJAtUHZH0e9bcNKHfkZdUC24JqYY4",
    authDomain: "clone-6b5f7.firebaseapp.com",
    projectId: "clone-6b5f7",
    storageBucket: "clone-6b5f7.appspot.com",
    messagingSenderId: "744386352093",
    appId: "1:744386352093:web:c804bebe33c328fe235c34",
    measurementId: "G-1HB1QX86FV"
});
const db = firebase.firestore();
export {db};