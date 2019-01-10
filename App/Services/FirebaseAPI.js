import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBvCvUbzv8H88ED-yJFfN0985qA0heE2YI",
    authDomain: "kanji-f447b.firebaseapp.com",
    databaseURL: "https://kanji-f447b.firebaseio.com",
    projectId: "kanji-f447b",
    storageBucket: "kanji-f447b.appspot.com",
    messagingSenderId: "796438937263"
};

firebase.initializeApp(config);
const database = firebase.database();

const api = {
    database: database
};

export default api;
