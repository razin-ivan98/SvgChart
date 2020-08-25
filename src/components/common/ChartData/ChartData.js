import React from "react";
import PropTypes from "prop-types";

import { ChartDataWrapper } from "./ChartData.styled";

const propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	children: PropTypes.node,
};
const defaultProps = {
	width: "100%",
	height: "100%",
};

const ChartData = (props) => {
	const {
		height,
		width,
		children,
	} = props;

	return (
		<ChartDataWrapper height={height} width={width}>
			{children}
		</ChartDataWrapper>
	);
};

ChartData.propTypes = propTypes;
ChartData.defaultProps = defaultProps;

export default ChartData;
