import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-storage";

var firebaseConfig = {
	apiKey: "AIzaSyBSWtVFN3nzyjjSmb9dQCH4WmMrQKW-Wfk",
	authDomain: "distribution-site-34df0.firebaseapp.com",
	databaseURL: "https://distribution-site-34df0.firebaseio.com",
	projectId: "distribution-site-34df0",
	storageBucket: "distribution-site-34df0.appspot.com",
	messagingSenderId: "808967706567",
	appId: "1:808967706567:web:b4af2d1d8b9c656c732be2",
	measurementId: "G-1FXJTEQ87H",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
