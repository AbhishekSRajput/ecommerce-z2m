import CartActionType from './cart.type';

const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionType.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};

		case CartActionType.ADD_ITEM:
			return {
				...state,
				cartItems: [...state.cartItems, action.payload],
			};

		default:
			return state;
	}
};

export default cartReducer;
