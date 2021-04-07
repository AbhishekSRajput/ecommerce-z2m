import React from 'react';

//style
import { CustomButtonContainer } from './custom-button.style';

const CustomButton = ({ children, ...props }) => (
	<CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
