import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./CheckBox.styled";

const propTypes = {
	isChecked: PropTypes.bool,
	isDisabled: PropTypes.bool,
	onChange: PropTypes.func,
};

const defaultProps = {
	isDisabled: false,
};

const CheckBox = (props) => {
	const {
		isChecked,
		isDisabled,
		onChange,
	} = props;

	return (
		<Wrapper isChecked={isChecked} isDisabled={isDisabled} onChange={isDisabled ? null : onChange}>
			<input type="checkbox" />
		</Wrapper>
	);
};

CheckBox.propTypes = propTypes;
CheckBox.defaultProps = defaultProps;

export default CheckBox;
