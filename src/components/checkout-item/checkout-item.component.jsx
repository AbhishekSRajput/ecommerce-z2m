import React from 'react';

import { connect } from 'react-redux';

import {
	addItem,
	clearItemFromCart,
	removeItem,
} from '../../redux/cart/cart.actions';

//style
import './checkout-item.style.scss';

const CheckoutItemComponent = ({
	cartItem,
	clearItem,
	addItem,
	removeItem,
}) => {
	const { imageUrl, name, quantity, price } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => removeItem(cartItem)}>
					{' '}
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItem(cartItem)}>
					{' '}
					&#10095;{' '}
				</div>
			</span>
			<span className="price">{price}</span>
			<div className="remove-button" onClick={() => clearItem(cartItem)}>
				{' '}
				&#10005;{' '}
			</div>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCart(item)),
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItemComponent);
