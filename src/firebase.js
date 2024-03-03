// src/firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyDGYNedMTETeqeD9MpwwzHiEmKczkBPugw",
    authDomain: "test-chat-c56a6.firebaseapp.com",
    projectId: "test-chat-c56a6",
    storageBucket: "test-chat-c56a6.appspot.com",
    messagingSenderId: "188883407854",
    appId: "1:188883407854:web:fcf414078c38a19009b4ff",
    measurementId: "G-SXR1SL4656"
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
export const chatRef = database.ref('chat');
