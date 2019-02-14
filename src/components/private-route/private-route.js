import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { FirebaseAuthContext } from '../../context/context';

export const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<FirebaseAuthContext.Consumer>
			{({ isUserSignedIn }) => {
				return (
					<Route
						{...rest}
						render={props =>
							isUserSignedIn ? (
								<Component {...props} />
							) : (
								<Redirect
									to={{
										pathname: '/login',
										state: { from: props.location },
									}}
								/>
							)
						}
					/>
				);
			}}
		</FirebaseAuthContext.Consumer>
	);
};
