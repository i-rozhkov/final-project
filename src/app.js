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
import Category from './components/Category';
import Author from './components/Author';

ReactDOM.render(
	(
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/category/:categoryName/:id" component={Book} />
				<Route path="/category/:categoryName" component={Category} />
				<Route path="/author/:authorName" component={Author} />
				{/* <Route path="/popular" component={Popular} /> */}
				{/* <Route path="/new" component={New} /> */}
				{/* <Route path="/bestsellers" component={Bestsellers} /> */}
				<Route path="/contacts" component={Contacts} />
				<Route path="/books" component={Books} />
				<Route path="/audios/:id" component={Book} />
				<Route path="/audios" component={Books} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	),
	document.getElementById('main'),
);
