import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyD69ty5-_HaH74FCt6rNMrH8cOFZQHZgv8",
	authDomain: "recreation-ca826.firebaseapp.com",
	projectId: "recreation-ca826",
	storageBucket: "recreation-ca826.appspot.com",
	messagingSenderId: "570829707632",
	appId: "1:570829707632:web:a1582c7f6b4d5f5a3c17b5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth()

export {db, auth}