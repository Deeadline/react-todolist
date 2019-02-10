import React, { ReactNode, Component } from "react";
import styled from "../../utils/theme";
import { FirebaseAuthContext } from "../../context/context";
import { Redirect } from "react-router";

const MainWrapper = styled.main`
	display: flex;
	justify-content: center;
	height: calc(100vh - (60px + 50px));
	background-color: ${({ theme }) => theme.colors.primary};
	${({ theme }) => theme.media.desktop} {
		height: calc(100vh - (80px + 30px));
	}
	padding: 2rem 1rem 1rem;
`;
export class Main extends Component<{}> {
	render(): ReactNode {
		const { children } = this.props;
		return (
			<FirebaseAuthContext.Consumer>
				{({ isUserSignedIn }) => {
					if (isUserSignedIn) {
						return <MainWrapper>{children}</MainWrapper>;
					}
					return <Redirect to="/login" />;
				}}
			</FirebaseAuthContext.Consumer>
		);
	}
}
