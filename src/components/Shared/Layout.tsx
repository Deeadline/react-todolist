import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Theme, createGlobalStyle, ThemeProvider } from "../../utils/theme";

import { Header } from "../Header/header";
import { Main } from "../Main/main";
import { Footer } from "../Footer/footer";
import { Login } from "../Login/login";
import { Register } from "../Register/register";

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

export const Layout = ({ children }: any) => {
	return (
		<ThemeProvider theme={Theme}>
			<Router>
				<>
					<GlobalStyle />
					<Header />
					<Main>
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
					</Main>
					<Footer />
				</>
			</Router>
		</ThemeProvider>
	);
};
