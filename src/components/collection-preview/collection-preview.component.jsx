import React from 'react';
//react router
import { withRouter } from 'react-router-dom';
//components
import CollectionItem from '../collection-item/collection-item.component';
//styled components
import {
	CollectionPreviewContainer,
	TitleContainer,
	PreviewContainer,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
	<CollectionPreviewContainer>
		<TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
			{title.toUpperCase()}
		</TitleContainer>
		<PreviewContainer>
			{items
				.filter((item, idx) => idx < 4)
				.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
		</PreviewContainer>
	</CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
