import React from 'react';
import { createStructuredSelector } from 'reselect';

//redux
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
//firebase
import { auth } from '../../firebase/firebase.utils';
//component
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
//images
import { ReactComponent as Logo } from '../../assets/crown.svg';
//style
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer className="logo-container" to="/">
			<Logo className="logo" />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink className="option" to="/shop">
				SHOP
			</OptionLink>
			<OptionLink className="option" to="/shop">
				CONTACT
			</OptionLink>
			{currentUser ? (
				<OptionLink as="div" onClick={() => auth.signOut()}>
					SIGN OUT
				</OptionLink>
			) : (
				<OptionLink className="option" to="/signin">
					SIGN IN
				</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>

		{hidden ? null : <CartDropdown />}
	</HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
	//createStructuredSelector passes top level state to each selector
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
