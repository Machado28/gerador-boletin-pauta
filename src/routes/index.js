import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cadastro from '../Pages/Cadastro';
import Home from '../Pages/Home';
import InserirPauta from '../Pages/InserirPauta';
import Login from '../Pages/Login';
import { AdminRoute, PrivateRoute } from './data/routes';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<PrivateRoute exact path="/" component={Home}></PrivateRoute>
				<PrivateRoute
					exact
					path="/upload/pauta"
					component={InserirPauta}
				></PrivateRoute>
				<AdminRoute path="/cadastro" component={Cadastro}></AdminRoute>
				<Route path="/login" component={Login}></Route>
			</Switch>
		</BrowserRouter>
	);
}
