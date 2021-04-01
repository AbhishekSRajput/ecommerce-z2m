import React from 'react';

//redux
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

//component
import CollectionItem from '../../components/collection-item/collection-item.component';

//style
import './collection.style.scss';

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<div className="collection-page">
			<h2 className={title}>{title}</h2>
			<div className="items">
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	//this selector needs part of 'state' depending on
	//the url(uniform resource locator) parameter
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
