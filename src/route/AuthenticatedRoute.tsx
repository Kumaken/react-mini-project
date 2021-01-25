import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import CheckIfLoggedIn from 'utils/CheckIfLoggedIn';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
	// Add your own authentication on the below line.
	const isLoggedIn: boolean = CheckIfLoggedIn();

	return (
		<Route
			{...rest}
			render={(props) =>
				isLoggedIn ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
				)
			}
		/>
	);
};

export default AuthenticatedRoute;
