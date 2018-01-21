import 'normalize.css';
import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './css/styles.css';
import './img/favicon.ico';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import Contacts from './components/pages/Contacts';
import Books from './components/pages/Books';
import Book from './components/pages/Book';
import Author from './components/pages/Author';
import Header from './components/units/Header';
import Footer from './components/units/Footer';
import Category from './components/pages/Category';
import Breadcrumbs from './components/units/Breadcrumbs';

const customHistory = createBrowserHistory();

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			booksList: [],
			audioList: [],
			immutableBooks: [],
			immutableAudio: [],
			immutableSearchBooks: [],
			immutableSearchAudio: [],
			searchString: '',
		};

		this.changeId = this.changeId.bind(this);
		this.filterBooksById = this.filterBooksById.bind(this);
		this.filterBySearch = this.filterBySearch.bind(this);
	}

	componentWillMount() {
		const ids = ['new', 'popular', 'bestsellers'];
		const id = window.location.pathname.split('/').reverse()[0];
		axios.all([
			axios.get('http://localhost:8080/data/books.json'),
			axios.get('http://localhost:8080/data/audio.json'),
		]).then(axios.spread((books, audio) => {
			this.setState({
				booksList: books.data,
				immutableBooks: books.data,
				immutableSearchBooks: books.data,
				audioList: audio.data,
				immutableAudio: audio.data,
				immutableSearchAudio: audio.data,
			});

			if (ids.indexOf(id) !== -1) {
				let immutable;
				if (window.location.pathname.indexOf('books') !== -1) {
					immutable = this.state.immutableBooks.slice();
				} else if (window.location.pathname.indexOf('audio') !== -1) {
					immutable = this.state.immutableAudio.slice();
				}

				const refreshedItems = this.filterBooksById(id, immutable);
				this.setState({
					audioList: refreshedItems,
					immutableSearchAudio: refreshedItems,
					booksList: refreshedItems,
					immutableSearchBooks: refreshedItems,
				});
			}
		}));
	}

	filterBooksById(id, arrayToFilter) {
		let filteredBooks;
		switch (id) {
		case 'popular':
			filteredBooks = arrayToFilter.filter(item => item.score > 5);
			break;
		case 'new':
			filteredBooks = arrayToFilter.filter(item => item.year > 2010);
			break;
		case 'bestsellers':
			filteredBooks = arrayToFilter.filter(item => item.score > 8);
			break;
		case '':
			filteredBooks = arrayToFilter;
			break;
		default:
			filteredBooks = arrayToFilter.filter(item => item.title.indexOf(id) !== -1);
			break;
		}
		return filteredBooks;
	}

	filterBySearch(event) {
		const stringToFilter = event.target.value;

		let immutable;
		if (window.location.pathname.indexOf('books') !== -1) {
			immutable = this.state.immutableSearchBooks.slice();
		} else if (window.location.pathname.indexOf('audio') !== -1) {
			immutable = this.state.immutableSearchAudio.slice();
		}

		if (window.location.pathname.indexOf('category') !== -1) {
			this.setState({
				searchString: stringToFilter,
			});
		} else {
			const filteredArray = immutable.filter(item =>
				item.title.indexOf(stringToFilter) !== -1);
			if (filteredArray.length) {
				this.setState({
					booksList: filteredArray,
					audioList: filteredArray,
				});
			}
		}
	}

	changeId(event) {
		let immutable;
		const newId = event.target.href.slice(28);
		if (event.target.href.indexOf('books') !== -1) {
			immutable = this.state.immutableBooks.slice();
		} else if (event.target.href.indexOf('audio') !== -1) {
			immutable = this.state.immutableAudio.slice();
		}
		const filteredBooks = this.filterBooksById(newId, immutable);
		this.setState({
			booksList: filteredBooks,
			audioList: filteredBooks,
			immutableSearchAudio: filteredBooks,
			immutableSearchBooks: filteredBooks,
		});
	}

	render() {
		return (
			<BrowserRouter histoty={customHistory}>
				<div className="app">
					<Header changeId={this.changeId} filterBySearch={this.filterBySearch} />
					<Breadcrumbs />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/category/:categoryName/:id" render={props => (<Book booksList={this.state.booksList} {...props} />)} />
						<Route path="/category/:categoryName" render={props => (<Category searchString={this.state.searchString} {...props} />)} />
						<Route path="/author/:authorName" component={Author} />
						<Route path="/contacts" component={Contacts} />
						<Route path="/books" render={props => (<Books booksList={this.state.booksList} {...props} />)} />
						<Route path="/audio" render={props => (<Books booksList={this.state.audioList} {...props} />)} />
						<Route component={NotFound} />
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('main'),
);
