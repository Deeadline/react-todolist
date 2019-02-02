import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Header } from "../Header/Header";
import { Container } from "../Shared/Container";
import { Home } from "../Home";

const GlobalStyle = createGlobalStyle`
*,*::after,*::before {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html, body, #root {
	width: 100%;
	height: 100%;
}
`;

export const Layout = ({ children }: any) => {
	return (
		<Router>
			<>
				<GlobalStyle />
				<Header />
				<Container as="main">
					<Route exact path="/" component={Home} />
					{/* <Route path="/register" component={Register}/> */}
					{/* <Route path="/login" component={Login}/> */}
					{/* <Route path="/calendar" component={Calendar} /> */}
				</Container>
			</>
		</Router>
	);
};
