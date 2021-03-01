import { UserActionTypeS } from './user.types';

export const setCurrentUser = (user) => {
	return {
		type: UserActionTypeS.SET_CURRENT_USER,
		payload: user,
	};
};
