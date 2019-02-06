import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "@utils/theme";

import { Navigation } from "@components/navigation/navigation";

const HeaderWrapper = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 0 1rem;
	text-align: center;
	background-color: ${({ theme }) => theme.colors.primary};
	border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
	height: 80px;
`;
const LinkMain = styled(Link)`
	text-decoration: none;
`;
const Title = styled.h1`
	text-align: center;
	font-size: 2rem;
	font-weight: ${({ theme }) => theme.fonts.bold};
	color: ${({ theme }) => theme.colors.third};
		&:hover {
		color: ${({ theme }) => theme.colors.fourth};
	}
}
`;
const TitleApp = styled.span`
	font-weight: ${({ theme }) => theme.fonts.thin};
`;

export class Header extends Component {
	render() {
		return (
			<HeaderWrapper>
				<LinkMain to="/">
					<Title>
						TODO<TitleApp>APP</TitleApp>
					</Title>
				</LinkMain>
				<Navigation />
			</HeaderWrapper>
		);
	}
}
