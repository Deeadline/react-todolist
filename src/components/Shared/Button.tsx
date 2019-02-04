import styled from "styled-components";

export const Button = styled.button`
	color: white;
	cursor: pointer;
	font-weight: ${({ theme }) => theme.font.bold};
	font-size: 1rem;
	padding: 0.5rem;
	margin: 0;
	border-radius: 50px;
	width: 100px;
	text-decoration: none;
	border: none;
`;

export const PrimaryButton = styled(Button)`
	background-color: ${({ theme }) => theme.color.button};
	&:hover {
		background-color: ${({ theme }) => theme.color.buttonHover};
	}
`;
