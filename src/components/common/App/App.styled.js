import styled from "styled-components";

export const AppWrapper = styled.div`
	box-sizing: border-box;
	max-width: 1000px;
	margin: 0 auto;
	padding: 20px;
	height: 100vh;
	text-align: center;
	background-color: #555555;
`;

export const Header = styled.div`
	height: 80px;
	color: green;
	overflow: auto;
`;

export const ChartSection = styled.div`
	height: calc(50% - 80px);
	position: relative;
	padding: 5px;
	border-radius: 5px;
	background-color: #ffffff;
	boxSizing: border-box;
`;

export const ChartDataSection = styled.div`
	height: calc(50% - 80px);
	padding-top: 20px;
	box-sizing: border-box;
`;

export const ButtonsSection = styled.div`
	height: 80px;
	width: 200px;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const SpinnerWrapper  =styled.div`
	position: absolute;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	display: flex;
`;