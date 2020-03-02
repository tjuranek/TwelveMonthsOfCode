import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './pages/home';
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
		</Switch>
	</Router>
);
