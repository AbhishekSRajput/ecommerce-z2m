import React from 'react';

//redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	selectCartItems,
	selectCartTotal,
} from '../../redux/cart/cart.selectors';

//component
import CheckoutItemComponent from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.coponent';

//style
import './checkout.style.scss';

const CheckoutPage = ({ cartItems, total }) => {
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem) => (
				<CheckoutItemComponent key={cartItem.id} cartItem={cartItem} />
			))}
			<div className="total">
				<span>TOTAL: ${total}</span>
			</div>
			<div className="test-warning">
				*Please use the test credit card for payment*
				<br />
				5555 5555 5555 4444 - Exp: 08/24 - cvv: 123
			</div>
			<StripeCheckoutButton price={total} />
		</div>
	);
};
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
