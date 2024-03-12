// src/firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: `${process.env.apiKey}`,
    authDomain: `${process.env.authDomain}`,
    projectId: `${process.env.projectId}`,
    storageBucket: `${process.env.storageBucket}`,
    messagingSenderId: `${process.env.messagingSenderId}`,
    appId: `${process.env.appId}`,
    measurementId: `${process.env.measurementId}`
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
export const chatRef = database.ref('chat');
