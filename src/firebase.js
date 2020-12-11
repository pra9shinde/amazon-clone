import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyAHVhjItV7LQGK1IvEaWI25KDX08HIfy7Y',
    authDomain: 'clone-b05d5.firebaseapp.com',
    projectId: 'clone-b05d5',
    storageBucket: 'clone-b05d5.appspot.com',
    messagingSenderId: '209001118645',
    appId: '1:209001118645:web:81c2ed33e7a1e010b1f7fc',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
