import styled from "@utils/theme";

export const Button = styled.button`
	color: ${({ theme }) => theme.colors.primary};
	cursor: pointer;
	font-family: inherit;
	font-weight: ${({ theme }) => theme.fonts.semi_bold};
	font-size: 12px;
	padding: 0.6rem;
	margin: 0;
	border-radius: 15px;
	width: 100px;
	text-decoration: none;
	border: none;
	text-transform: uppercase;
`;

export const PrimaryButton = styled(Button)`
	background-color: ${({ theme }) => theme.colors.third};
	&:hover {
		background-color: ${({ theme }) => theme.colors.fourth};
	}
`;

export const BigButton = styled(PrimaryButton)`
	width: 50%;
	font-size: 14px;
	margin-top: 5px;
`;
