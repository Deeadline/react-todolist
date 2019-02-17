import React from 'react';
import { auth } from '../config/firebase';

import { Login } from '../components/login/login';

export const withAuth = Component => {
	class WithAuth extends React.Component {
		state = {
			isAuth: false,
		};

		componentDidMount = () => {
			auth.onAuthStateChanged(user => {
				user
					? this.setState({ isAuth: true })
					: this.setState({ isAuth: false });
			});
		};

		componentWillUnmount = () => {};

		render() {
			return this.state.isAuth ? <Component /> : <Login />;
		}
	}
	return WithAuth;
};

export const withAuthButton = Component => {
	class WithAuthButton extends React.Component {
		state = {
			isAuth: false,
		};
		componentDidMount = () => {
			auth.onAuthStateChanged(user => {
				user
					? this.setState({ isAuth: true })
					: this.setState({ isAuth: false });
			});
		};

		componentWillUnmount = () => {};

		render() {
			return this.state.isAuth ? <Component /> : null;
		}
	}
	return WithAuthButton;
};
