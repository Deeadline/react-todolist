import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Theme } from '../../utils/theme';
import { Container } from './container';
import { Header } from '../header/header';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '../private-route/private-route';
import { Home } from '../home/home';
import { Calendar } from '../calendar/calendar';
import { Login } from '../login/login';
import { Register } from '../register/register';

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

export const Layout = () => {
	return (
		<ThemeProvider theme={Theme}>
			<>
				<GlobalStyle />
				<Header />
				<Container>
					<Switch>
						<PrivateRoute exact path="/" component={Home} />
						<PrivateRoute path="/calendar" component={Calendar} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
					</Switch>
				</Container>
			</>
		</ThemeProvider>
	);
};
