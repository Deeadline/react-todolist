import styled from "../../utils/theme";

export const Input = styled.input`
	width: 80%;
	text-align: center;
	padding: 0.7rem;
	background: none;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.colors.third};
	font-weight: ${({ theme }) => theme.fonts.thin};
	border-radius: 0;
	box-shadow: none;
	color: white;
	line-height: 0.3rem;
	opacity: 0.8;
	&:hover {
		opacity: 1;
	}
`;
