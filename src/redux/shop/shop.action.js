import shopActionTypes from './shop.type';

export const updateCollections = (collectionsMap) => ({
	type: shopActionTypes.UPDATE_COLLECTION,
	payload: collectionsMap,
});
