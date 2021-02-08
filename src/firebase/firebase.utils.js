import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCx0rmAXs6qn6pjiJbe_7fCQpehf4Io3i4',
	authDomain: 'e-commerce-z2m.firebaseapp.com',
	databaseURL: 'https://e-commerce-z2m-default-rtdb.firebaseio.com',
	projectId: 'e-commerce-z2m',
	storageBucket: 'e-commerce-z2m.appspot.com',
	messagingSenderId: '237769603126',
	appId: '1:237769603126:web:7e8d69ce82d712ae608097',
	measurementId: 'G-5E6CTKHV7T',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
