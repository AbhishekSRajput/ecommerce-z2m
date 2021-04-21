import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	(shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	(collections) =>
		/**
		 * !converted collection object to array of objects so we can map over objects
		 * !in collectionPreviewComponent
		 */
		collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
	createSelector(
		[selectCollections],
		//collections is an object =collections[collectionUrlParam]::is key =which returns selected collection object
		(collections) => (collections ? collections[collectionUrlParam] : null)
	);
