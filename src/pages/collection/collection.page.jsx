import React from 'react';

//redux
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

//component
import CollectionItem from '../../components/collection-item/collection-item.component';

//style
import './collection.style.scss';

const CollectionPage = ({ collection }) => {
	console.log(collection);
	return (
		<div className="category">
			<h2>category page</h2>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	//this selector needs part of 'state' depending on
	//the url(uniform resource locator) parameter
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
