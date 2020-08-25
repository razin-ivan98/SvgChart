import styled from "styled-components";

export const ChartDataWrapper = styled.div`
	background-color: #555555;
	box-sizing: border-box;
	height: ${({ height }) => height};
	width: ${({ width }) => width};
	overflow-y: auto;
	overflow-x: hidden;
`;

export const ChartDataItemWrapper = styled.div`
	background-color: ${({ backgroundColor }) => backgroundColor};
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 5px 5px;
	border-radius: 5px;
	color: black;
`;

export const InputWrapper = styled.div`
	flex-grow: 1;
	flex-shrink: 2;
	text-align: center;
`;

export const Text = styled.div`
	flex-grow: 4;
	flex-shrink: 1;
	display: flex;
	flex-direction: column;
`;
