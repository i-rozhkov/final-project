import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Profile from '../units/Profile';

export default class Book extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};

		this.getMainBook = this.getMainBook.bind(this);
		this.getExtraBooks = this.getExtraBooks.bind(this);
		this.shuffle = this.shuffle.bind(this);
	}

	componentWillMount() {
		axios.all([
			axios.get('/books'),
			axios.get('/audio'),
		])
			.then(axios.spread((books, audio) => {
				const lib = books.data.concat(audio.data);
				this.setState({
					booksList: lib,
				});
				this.getMainBook(lib, this.props.match.params.id);
			}));
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.match.params.id !== nextProps.match.params.id) {
			this.getMainBook(this.state.booksList, nextProps.match.params.id);
		}
	}

	getMainBook(booksList, id) {
		const title = id.split('-').map(item => item[0].toUpperCase() + item.slice(1))[0];
		const bookItem = booksList.filter(item => item.title.indexOf(title) !== -1)[0];
		this.getExtraBooks(bookItem, booksList);
		this.setState({
			mainBook: bookItem,
		});
	}

	getExtraBooks(mainBook, booksList) {
		const bookCategories = mainBook.category.indexOf('|') === -1 ?
			mainBook.category :
			mainBook.category.split('|');

		const bookItems = (typeof bookCategories === 'string') ?
			booksList.filter(item => item.category.indexOf(bookCategories) !== -1) :
			booksList.filter(item => item.category.indexOf(bookCategories[0]) !== -1);

		bookItems.splice(bookItems.indexOf(mainBook), 1);

		this.setState({
			extraBooks: this.shuffle(bookItems),
		});
	}

	shuffle(a) {
		const arr = a;
		for (let i = arr.length - 1; i > 0; i -= 1) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		return arr;
	}

	render() {
		return (
			<section>
				{this.state.extraBooks && this.state.mainBook && <Profile
				book={this.state.mainBook}
				extraBooks={this.state.extraBooks}
				/>}

			</section>
		);
	}
}

Book.propTypes = {
	match: PropTypes.objectOf(PropTypes.any).isRequired,
	booksList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
