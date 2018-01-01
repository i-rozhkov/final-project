// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch } from 'react-axios';
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './css/styles.css';
import NotFound from './components/NotFound';
import './img/favicon.ico';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Books from './components/Books';
import Book from './components/Book';

ReactDOM.render(
	(
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/contacts" component={Contacts} />
				<Route path="/books" component={Books} />
				<Route path="/books/:id" component={Book} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	),
	document.getElementById('main'),
);
