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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;

		const createdAt = new Date();

		try {
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

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

//one way of query firestore objects

//firestore
// .collection('users')
// .doc('adkjfalkdjflkj')
// .collection('cartitems=;lakdjfakjf')
// .doc('adfjadksjflkdjf');

//another way of doing the same thing

//firestore.doc('/collection/id/collection/id');
//firestore.collection('/collection/id/collection')
