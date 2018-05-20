import React from "react";
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect,
	HashRouter
} from "react-router-dom";

import HomeApplication from "./Components/HomeApplication.js";
import FormValidation from "./Components/FormValidation/FormValidation.js";
import Todo from "./Components/Todo/Todo.js";
import AddTeam from "./Components/AddTeam/AddTeam.js";
import TeamComponent from "./Components/TeamComponent/TeamComponent.js";
const appRoutes = [
	{
		path: "/",
		isExactPath: true,
		component: <HomeApplication />
	},
	{
		path: "/FormValidation",
		isExactPath: true,
		component: <FormValidation />
	},
	{
		path: "/Todo",
		isExactPath: true,
		component: <Todo />
	},
	{
		path: "/add-team",
		isExactPath: true,
		component: <AddTeam />
	},
	{
		path: "/add-member",
		isExactPath: true,
		component: <TeamComponent />
	}

];

const routes = (
	<HashRouter>
		<Switch>
			{appRoutes.map((routeItem, idx) => {
				return <Route
					key={routeItem.path}
					path={routeItem.path}
					exact={routeItem.isExactPath}
					render={(params) => {
						return routeItem.component;
					}}
				/>;
			})}
		</Switch>
	</HashRouter>
);

export default routes;