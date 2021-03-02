import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown-style.scss';
const CartDropdown = () => {
	return (
		<div className="cart-dropdown">
			<div className="cart-item" />
			<CustomButton>CHECKOUT</CustomButton>
		</div>
	);
};

export default CartDropdown;
