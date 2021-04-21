//components
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
//redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	selectCartItems,
	selectCartTotal,
} from '../../redux/cart/cart.selectors';
//style
import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
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
			<CheckoutItem key={cartItem.id} cartItem={cartItem} />
		))}
		<div className="total">TOTAL: ${total}</div>
		<div className="test-warning">
			**please use the following test card for payment**
			<br />
			4242 4242 4242 4242 - cvv: 123 - expiry: 01/30
		</div>
		<StripeCheckoutButton price={total} />
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
