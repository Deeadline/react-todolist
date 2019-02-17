import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Layout } from './shared/layout';
import { Home } from '../components/home/home';
import { Calendar } from '../components/calendar/calendar';
import { Login } from '../components/login/login';
import { Register } from '../components/register/register';
import { withAuth } from '../hoc/with-auth';
import * as ROUTES from '../utils/routes';

class App extends Component {
	render() {
		return (
			<Layout>
				<Switch>
					<Route
						exact
						path={ROUTES.HOME}
						component={withAuth(Home)}
					/>
					<Route
						path={ROUTES.CALENDAR}
						component={withAuth(Calendar)}
					/>
					<Route path={ROUTES.LOGIN} component={Login} />
					<Route path={ROUTES.REGISTER} component={Register} />
				</Switch>
			</Layout>
		);
	}
}

export default App;
