import React from 'react';

//react router
import { Route } from 'react-router-dom';

//redux
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.action';

//component
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../pages/collection/collection.page';

//firebase
import {
	firestore,
	convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils';

class ShopPage extends React.Component {
	//unsubscribing from store
	unSubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		//collection ref from firestore with collection name collection
		const collectionRef = firestore.collection('collection');

		//we got the reference now in order to get the data
		this.unSubscribeFromSnapshot = collectionRef.onSnapshot(
			async (snapshot) => {
				const collectionsMap = convertCollectionSnapshotToMap(snapshot);

				updateCollections(collectionsMap);
			}
		);
	}

	render() {
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route exact path={`${match.path}`} component={CollectionOverview} />
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPage}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionsMap) =>
		dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
