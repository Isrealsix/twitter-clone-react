import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDvdpbGlHVwmwxoaxNkMHMI-bOFp73p6nc',
	authDomain: 'twitter-d4564.firebaseapp.com',
	projectId: 'twitter-d4564',
	storageBucket: 'twitter-d4564.appspot.com',
	messagingSenderId: '956841267147',
	appId: '1:956841267147:web:350ce8efef8e4787db704e',
	measurementId: 'G-37M44PL2RB',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
