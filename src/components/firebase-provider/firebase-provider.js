import React, { Component } from 'react';
import { auth } from '../../config/firebase';
import { firebaseContext, FirebaseAuthContext } from '../../context/context';

export class FirebaseAuthProvider extends Component {
	state = firebaseContext;

	componentDidMount() {
		auth.onAuthStateChanged(user => {
			this.setState({
				authStatusReported: true,
				isUserSignedIn: !!user,
			});
		});
	}

	render() {
		const { children } = this.props;
		const { isUserSignedIn, authStatusReported } = this.state;
		return (
			<FirebaseAuthContext.Provider
				value={{ isUserSignedIn, authStatusReported }}
			>
				{authStatusReported && children}
			</FirebaseAuthContext.Provider>
		);
	}
}
