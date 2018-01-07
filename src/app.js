import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './css/styles.css';
import NotFound from './components/pages/NotFound';
import './img/favicon.ico';
import Home from './components/pages/Home';
import Contacts from './components/pages/Contacts';
import Books from './components/pages/Books';
import Book from './components/pages/Book';
import Category from './components/pages/Category';
import Author from './components/pages/Author';
import SubMenuItem from './components/pages/SubMenuItem';

const customHistory = createBrowserHistory();

ReactDOM.render(
	(
		<BrowserRouter histoty={customHistory}>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/category/:categoryName/:id" component={Book} />
				<Route path="/category/:categoryName" component={Category} />
				<Route path="/author/:authorName" component={Author} />
				<Route path="/contacts" component={Contacts} />
				<Route path="/books/:id" component={SubMenuItem} />
				<Route path="/books" component={Books} />
				<Route path="/audios/:id" component={Book} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	),
	document.getElementById('main'),
);
