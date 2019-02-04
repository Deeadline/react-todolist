import React, { Component } from "react";
import styled from "styled-components";
import { Navigation } from "../Navigation/Navigation";

const HeaderWrapper = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 0 1rem;
	box-shadow: 0 0 5px 0 rgba(33, 40, 51, 1);
	text-align: center;
	background-color: ${({ theme }) => theme.color.secondary};
	height: 80px;
`;

const Title = styled.h1`
	text-align: center;
	font-size: 2rem;
	font-weight: ${({ theme }) => theme.font.bold};
}
`;
const TitleApp = styled.span`
	font-weight: ${({ theme }) => theme.font.thin};
`;

export class Header extends Component {
	render() {
		return (
			<HeaderWrapper>
				<Title>
					TODO<TitleApp>APP</TitleApp>
				</Title>
				<Navigation />
			</HeaderWrapper>
		);
	}
}
