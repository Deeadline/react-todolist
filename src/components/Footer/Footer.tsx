import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
	background-color: ${({ theme }) => theme.color.secondary};
	padding: 0 1.5rem;
	height: 30px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const Copyrights = styled.span`
	text-align: center;
`;

const Link = styled.a`
	padding-left: 5px;
	text-decoration: none;
	color: white;
	&:hover {
		color: ${({ theme }) => theme.color.buttonHover};
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
