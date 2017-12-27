// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch } from 'react-axios';
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './css/styles.css';
import NotFound from './components/NotFound';
import './img/favicon.ico';
import Home from './components/Home';

ReactDOM.render(
	(
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	),
	document.getElementById('main'),
);
