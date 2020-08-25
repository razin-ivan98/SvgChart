import React, { Children, cloneElement, useState } from "react";
import PropTypes from "prop-types";

import ChartItem from "./ChartItem";

import { Wrapper } from "./Chart.styled";

const propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	viewWidth: PropTypes.string,
	viewHeight: PropTypes.string,
	backgroundColor: PropTypes.string,
};
const defaultProps = {
	width: "100%",
	height: "100%",
	backgroundColor: "#ffffff",
	viewWidth: 100,
	viewHeight: 100,
};

const Chart = (props) => {
	const {
		width,
		height,
		viewHeight,
		viewWidth,
		backgroundColor,
	} = props;
	const children = props.children.filter(Boolean);

	const [max, setMax] = useState(1);

	const count = Children.count(children);
	let needClearMax = count > 0;

	const items = Children.map(children, (child) =>	
		{
			if (child && child.type === ChartItem){
				const maxValue = Math.max(...child.props.data);
				if (maxValue > max) {
					setMax(maxValue);
					needClearMax = false;
				} else if (maxValue === max) {
					needClearMax = false;
				}
				return cloneElement(child, {
					chartWidth: viewWidth,
					chartHeight: viewHeight,
					multiplicator: viewHeight / max,
					opacity: 1 / count,
				});
			}
			return null;
		}
	);

	if (needClearMax) {
		setMax(1);
	}

	return (
		<Wrapper width={width} height={height}>
			<svg viewBox={`0 0 ${viewWidth} ${viewHeight}`} preserveAspectRatio="none"
				style={{ height: "100%", width: "100%", margin: "auto" }}>
				<rect width="100%" height="100%" fill={backgroundColor} />
				{ items }
			</svg>
		</Wrapper>
	);
};

Chart.propTypes = propTypes;
Chart.defaultProps = defaultProps;

export default Chart;
