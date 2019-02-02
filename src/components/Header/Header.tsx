import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../Shared/Container";

const HeaderWrapper = styled.header`
	width: 100%;
	padding: 1rem 0;
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
	margin-bottom: 2rem;
	text-align: center;
	background: #ddd;
`;

export const Header = () => (
	<HeaderWrapper>
		<Container>
			<h1>Todo Application</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/calendar">Calendar</Link>
				</li>
			</ul>
		</Container>
	</HeaderWrapper>
);
