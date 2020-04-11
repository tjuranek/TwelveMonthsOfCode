import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { Redirector } from './pages/redirector';
import Statistics from './pages/statistics';

export default (
	<Router>
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/statistics">
				<Statistics />
			</Route>
			<Route path="/:key">
				<Redirector />
			</Route>
		</Switch>
	</Router>
);
