import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAx0e84_qgnobTARDmWfuFLAUXcQbwov8o',
	authDomain: 'crud-e5ced.firebaseapp.com',
	databaseURL: 'https://crud-e5ced-default-rtdb.firebaseio.com',
	projectId: 'crud-e5ced',
	storageBucket: 'crud-e5ced.appspot.com',
	messagingSenderId: '196637442551',
	appId: '1:196637442551:web:a7b2e806a4f9d253916ef2',
	measurementId: 'G-VY4242R0MP',
};

firebase.initializeApp(firebaseConfig);
//we use the userAuth object
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	//to query 	our database for a document reference object
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	//document reference
	//using the userRef we will call .get to get the SnapShot object
	//remember even if we do not have user object in the database
	//firebase will always give us the snapShot object
	//because using it we will check whether or not it exist or not
	//with.exists property
	const collectionRef = firestore.collection('users');
	//collection reference
	//users if only existing collection in firestore
	const snapShot = await userRef.get();
	const collectionSnapShot = await collectionRef.get();
	console.log(collectionSnapShot);

	//if snapshot object does not exist
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		//then we want to create a new document
		//object inside of our userRef
		try {
			//.set() means create a new document
			//using this object with all these properties on it
			//inside of our dataBase
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
