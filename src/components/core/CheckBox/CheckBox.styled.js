import styled from "styled-components";

export const Wrapper = styled.label`
	display: block;

	width: 26px;
	height: 26px;
	position: relative;

	margin: auto;

	&:before {
		box-sizing: border-box;
		position: absolute;
		content: "";
		display: block;
		width: 26px;
		height: 14px;
		left: 0px;
		top: 6px;
		background-color: ${({ isChecked }) => (isChecked ? "#00aa11": "#000000")};
		${({ isDisabled }) => (isDisabled ? "background-color: #555555" : null)};
		border-radius: 7px;
		border: 1px solid ${({ isDisabled }) => (isDisabled ? "#555555" : "#ffffff")};;
		transition: 0.3s;
	}

	&:after {
		position: absolute;
		content: "";
		display: block;
		width: 18px;
		height: 18px;
		left: ${({ isChecked }) => (isChecked ? "8px": "0px")};
		transition: 0.3s;
		top: 4px;
		background-color: #ffffff;
		box-shadow: 0 0 5px rgba(0,0,0,0.7);
		${({ isDisabled }) => (isDisabled ? "background-color: #555555" : null)};
		border-radius: 50%;
	}

	& input {
		display: none;
	}
`;
