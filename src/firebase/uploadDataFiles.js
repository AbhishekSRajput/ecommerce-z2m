import firebase from 'firebase/app';
import 'firebase/firestore';

/**
 * *things to remember
 *  !we can only make one set call at a time in firebase
 *
 * *how to prevent network failure if we are making multiple set calls
 * !we make batchWrite meaning making batch or group multiple call together in one big request
 * !if batch call succeeds it returns a promise if it succeeds returns void value meaning a null value
 */

const firestore = firebase.firestore();

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	console.log(objectsToAdd);
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();
	/**
	 * !forEach does not return new array like map method does
	 */
	objectsToAdd.forEach((object) => {
		/**
		 * !the collectionRef.doc =give me a new documentReference in this collection and randomly generate an id for me
		 */
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, object);
	});

	return await batch.commit();
};
