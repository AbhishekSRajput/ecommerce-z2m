import React from 'react';

//redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionPreview } from '../../redux/shop/shop.selectors';

//components
import CollectionPreview from '../collection-preview/collection-preview.component';

//style
import './collection-overview.style.scss';

const collectionOverview = ({ collections }) => (
	<div className="collection-overview">
		{collections.map(({ id, ...otherCollectionProps }) => (
			<CollectionPreview key={id} {...otherCollectionProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionPreview,
});

export default connect(mapStateToProps)(collectionOverview);
