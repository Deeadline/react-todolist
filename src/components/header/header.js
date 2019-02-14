import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Navigation } from '../navigation/navigation';

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

const Title = styled.h1`
	text-align: center;
	font-size: 2rem;
	font-weight: ${({ theme }) => theme.fonts.bold};
	color: ${({ theme }) => theme.colors.third};
		&:hover {
		color: ${({ theme }) => theme.colors.fourth};
	}
	text-decoration: none;
}
`;
const TitleApp = styled.span`
	font-weight: ${({ theme }) => theme.fonts.thin};
`;

export const Header = () => (
	<HeaderWrapper>
		<Title as={props => <Link {...props} to="/" />}>
			TODO<TitleApp>APP</TitleApp>
		</Title>
		<Navigation />
	</HeaderWrapper>
);
