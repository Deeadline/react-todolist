import React from "react";
import styled from "../../utils/theme";

const FooterWrapper = styled.footer`
	background-color: ${({ theme }) => theme.colors.primary};
	border-top: 1px solid ${({ theme }) => theme.colors.secondary};
	padding: 0 1.5rem;
	height: 30px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const Copyrights = styled.span`
font-weight: ${({ theme }) => theme.fonts.thin};
	font-size: 0.8rem;
	text-align: center;
`;

const Link = styled.a`
	padding-left: 5px;
	text-decoration: none;
	color: white;
	&:hover {
		color: ${({ theme }) => theme.colors.third};
	}
`;

export const Footer = () => (
	<FooterWrapper>
		<Copyrights>
			Created by
			<Link href="http://github.com/Deeadline" target="_blank">
				Deeadline
			</Link>
		</Copyrights>
	</FooterWrapper>
);
