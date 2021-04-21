import React from 'react';
//react route
import { Route } from 'react-router-dom';
//components
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
//HOC components
import WithSpinner from '../../components/with-spinner/with-spinner.component';

//firebase
import { firestore } from '../../firebase/firebase.utils';
import { convertCollectionSnapshotToMap } from '../../firebase/collectionSnapshot';
//redux
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.action';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	state = {
		loading: true,
	};

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection('collection');

		collectionRef.onSnapshot(async (snapshot) => {
			const collectionMap = convertCollectionSnapshotToMap(snapshot);
			updateCollections(collectionMap);
			this.setState({ loading: false });
		});
	}
	render() {
		const { match } = this.props;
		const { loading } = this.state;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionOverviewWithSpinner isLoading={loading} {...props} />
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner isLoading={loading} {...props} />
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionMap) =>
		dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
