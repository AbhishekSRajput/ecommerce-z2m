import React from 'react';
//styled components
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.style';

const WithSpinner = (WrappedComponent) => {
	const spinner = ({ isLoading, ...otherProps }) => {
		return isLoading ? (
			<SpinnerOverlay>
				<SpinnerContainer />
			</SpinnerOverlay>
		) : (
			<WrappedComponent {...otherProps} />
		);
	};

	return spinner;
};

export default WithSpinner;
