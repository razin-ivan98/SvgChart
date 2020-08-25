import styled, { keyframes, css } from "styled-components";

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;
const aRotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(-360deg);
	}
`;

const animationRotateRule = css`
  ${rotate} 1s linear infinite;
`;
const animationARotateRule = css`
  ${aRotate} 1s infinite linear;
`;

export const Wrapper = styled.span`
	box-sizing: border-box;
	display: block;
	margin: auto;
	width: 70px;
	height:70px;
	position: relative;
	&:before {
		box-sizing: border-box;
		position: absolute;
		content: "";
		top: 0px;
		left: 0px;
		display: block;
		width: 70px;
		height: 70px;
		border: 3px solid green;
		border-radius: 50%;
		border-top-color: rgba(0,0,0,0);
		border-right-color: rgba(0,0,0,0);
		animation: ${animationARotateRule};
	}

	&:after {
		box-sizing: border-box;
		position: absolute;
		content: "";
		top: 10px;
		left: 10px;
		display: block;
		width: 50px;
		height: 50px;
		border: 3px solid blue;
		border-radius: 50%;
		border-top-color: rgba(0,0,0,0);
		border-right-color: rgba(0,0,0,0);
		animation: ${animationRotateRule};
	}

`;
