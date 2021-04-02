import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51Ibl3uSERoNOYqmb4qtjjjxR8JG1MTGMlczDc5n045PPp6uOcjCP7FUOAHmFqaVdIYaUsbwNaiRziFO8VSBAvWkk00IyHlPn75';

	const onToken = (token) => {
		console.log(token);
		alert('payment successful');
	};

	return (
		<StripeCheckout
			label="pay Now"
			name="E-commerce-z2m"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is ${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
