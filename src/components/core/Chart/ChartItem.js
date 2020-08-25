import React from "react";
import PropTypes from "prop-types";

const propTypes = {
	multiplicator: PropTypes.number,
	chartWidth: PropTypes.string,
	chartHeight: PropTypes.string,
	data: PropTypes.array.isRequired,
	color: PropTypes.string.isRequired,
	fillColor: PropTypes.string.isRequired,
	opacity: PropTypes.number,
};

const ChartItem = (props) => {
	const {
		multiplicator,
		chartWidth,
		chartHeight,
		data,
		color,
		fillColor,
		opacity,
	} = props;

	const xMultiplicator = (chartWidth / (data.length - 1));
	let points = data.reduce((accumulator, curr, i) =>
		accumulator += (`${(Math.round(i * xMultiplicator)).toString()},
						${(chartHeight - Math.round(curr * multiplicator)).toString()}
		`),
	`0,${chartHeight} `);
	points += `${chartWidth},${chartHeight}`;
	return (
		<polygon stroke={color} fill={fillColor} points={points} fillOpacity={opacity} />
	);
}

ChartItem.propTypes = propTypes;

export default ChartItem;
