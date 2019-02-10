import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, {
	Theme,
	createGlobalStyle,
	ThemeProvider,
} from "../../utils/theme";

import { Header } from "../header/header";
import { Main } from "../main/main";
import { Footer } from "../footer/footer";
import { Login } from "../login/login";
import { Register } from "../register/register";
import { FirebaseAuthProvider } from "../firebase-provider/firebase-provider";
import { Home } from "../home/home";

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

const AuthWrapper = styled.main`
	display: flex;
	justify-content: center;
	height: calc(100vh - (60px + 50px));
	background-color: ${({ theme }) => theme.colors.primary};
	${({ theme }) => theme.media.desktop} {
		height: calc(100vh - (80px + 30px));
	}
	padding: 2rem 1rem 1rem;
`;

export const Layout = () => {
	return (
		<ThemeProvider theme={Theme}>
			<Router>
				<FirebaseAuthProvider>
					<>
						<GlobalStyle />
						<Header />

						<Main>
							<Route exact path="/" component={Home} />
						</Main>
						<Switch>
							<AuthWrapper>
								<Route path="/login" component={Login} />
								<Route path="/register" component={Register} />
							</AuthWrapper>
						</Switch>
						<Footer />
					</>
				</FirebaseAuthProvider>
			</Router>
		</ThemeProvider>
	);
};
