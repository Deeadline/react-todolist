import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { theme } from "../../utils/theme";
import Login from "../Login/Login";

const GlobalStyle = createGlobalStyle`
*,*::after,*::before {
	box-sizing: border-box;
}

html, body, #root {
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin: 0;
	padding: 0;
	font-family: 'Montserrat';
	color: white;
}
`;

export const Layout = ({ children }: any) => {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<>
					<GlobalStyle />
					<Header />
					<Main>
						<Route path="/" component={Login} />
					</Main>
					<Footer />
				</>
			</Router>
		</ThemeProvider>
	);
};
