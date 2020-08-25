import React from "react";
import PropTypes from "prop-types";

import { ChartDataItemWrapper, InputWrapper, Text } from "./ChartData.styled";

import Button from "../../core/Button";
import CheckBox from "../../core/CheckBox";

const propTypes = {
	backgroundColor: PropTypes.string,
	id: PropTypes.string,
	data: PropTypes.array,
	onChangeActive: PropTypes.func,
	onDeleteItem: PropTypes.func,
	isActive: PropTypes.bool,
};
const defaultProps = {
	isActive: true,
};

const ChartDataItem = (props) => {
	const {
		backgroundColor,
		id,
		data,
		onChangeActive,
		onDeleteItem,
		isActive,
	} = props;

	const max = Math.max(...data);
	const step = 100 / data.length;
	let area = 0;
	for (let i = 1; i < data.length; i++) {
		area += (data[i - 1] + data[i]) / 2 * step;
	}

	return (
		<ChartDataItemWrapper backgroundColor={backgroundColor}>
			<InputWrapper>
				<CheckBox isChecked={isActive} onChange={() => onChangeActive(id)}/>
			</InputWrapper>
			<Button type="danger" onClick={() => onDeleteItem(id)}>Delete</Button>
			<Text><span>Max = {max}; </span> <span>Area = {area.toFixed(2)}</span></Text>
		</ChartDataItemWrapper>
	);
};

ChartDataItem.propTypes = propTypes;
ChartDataItem.defaultProps = defaultProps;

export default ChartDataItem;
