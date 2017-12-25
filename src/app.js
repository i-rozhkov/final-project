// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import './css/styles.css';
import NotFound from './components/NotFound';

class Home extends React.Component {
	render() {
		return (<Header />);
	}
}

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
