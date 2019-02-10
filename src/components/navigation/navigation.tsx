import React, { Component } from "react";
import styled from "../../utils/theme";

import { PrimaryButton } from "../shared/button";
import { FirebaseAuthContext } from "../../context/context";
import { logout } from "../../config/firebase";

const NavigationWrapper = styled.nav`
	padding: 1rem 0;
`;

const NavigationList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;
const NavigationItem = styled.li``;
export class Navigation extends Component {
	logout = () => {
		logout();
	}
	render() {
		return (
			<FirebaseAuthContext.Consumer>
				{({ isUserSignedIn }) => {
					if (isUserSignedIn) {
						return (
							<NavigationWrapper>
								<NavigationList>
									<NavigationItem>
										<PrimaryButton onClick={this.logout}>
											Logout
										</PrimaryButton>
									</NavigationItem>
								</NavigationList>
							</NavigationWrapper>
						);
					}
				}}
			</FirebaseAuthContext.Consumer>
		);
	}
}
