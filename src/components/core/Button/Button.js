import React from "react";
import PropTypes from "prop-types";

import { Wrapper, types } from "./Button.styled";

const propTypes = {
	children: PropTypes.node,
	type: PropTypes.oneOf(Object.keys(types)),
	isDisabled: PropTypes.bool,
	onClick: PropTypes.func,
};
const defaultProps = {
	type: "success",
	isDisabled: false,
};

const Button = (props) => {
	const {
		children,
		onClick,
		type,
		isDisabled,
	} = props;
	return <Wrapper isDisabled={isDisabled} type={type}
			onClick={isDisabled ? null : onClick}>{children}</Wrapper>
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
