import styled from "styled-components";

export const types = {
	danger: "red",
	success: "green",
};

export const Wrapper = styled.button.attrs({})`
	width: auto;
	padding: 10px 20px;
	background-color: ${({ type }) => types[type]};
	color: white;
	border: 1px solid white;
	border-radius: 5px;
	transition: 0.3s;
	${({ isDisabled }) => (isDisabled ? 
		`background-color: #333333;
		color: #666666;
		border-color: #666666;
		cursor: not-allowed;
		` : `
		cursor: pointer;
		&:active {
			box-shadow: 0 0 10px rgba(0,0,0,0.5);
		}
		`)}
`;
