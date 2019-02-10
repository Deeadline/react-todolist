import React, { Component, ReactNode } from "react";
import { auth } from "../../config/firebase";
import { firebaseContext, FirebaseAuthContext } from "../../context/context";

type FirebaseProviderProps = {
	children: ReactNode;
};

type FirebaseProviderState = {
	authStatusReported: boolean;
	isUserSignedIn: boolean;
};

export class FirebaseAuthProvider extends Component<
	FirebaseProviderProps,
	FirebaseProviderState
> {
	state = firebaseContext;

	componentDidMount() {
		auth.onAuthStateChanged(user => {
			this.setState({
				authStatusReported: true,
				isUserSignedIn: !!user,
			});
		});
	}
	componentWillUnmount() {}
	render(): ReactNode {
		const { children } = this.props;
		const { authStatusReported, isUserSignedIn } = this.state;
		return (
			<FirebaseAuthContext.Provider
				value={{ isUserSignedIn, authStatusReported }}
			>
				{authStatusReported && children}
			</FirebaseAuthContext.Provider>
		);
	}
}
