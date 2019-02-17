import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Theme } from '../../utils/theme';
import { Container } from './container';
import { Header } from '../header/header';

export const GlobalStyle = createGlobalStyle`
*,*::after,*::before {
	box-sizing: border-box;
}

html, body, #root {
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin: 0;
	padding: 0;
	font-family: 'Montserrat', sans-serif;
	color: white;
	letter-spacing: 0.8px;
}
`;

export const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={Theme}>
			<>
				<GlobalStyle />
				<Header />
				<Container>{children}</Container>
			</>
		</ThemeProvider>
	);
};
