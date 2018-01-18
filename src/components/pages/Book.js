import React from 'react';
import PropTypes from 'prop-types';
import Profile from '../units/Profile';
import Breadcrumbs from '../units/Breadcrumbs';

const booksList = require('../../../data/books.json');

const Book = ({ match }) => {
	const title = match.params.id.split('-').map(item => item[0].toUpperCase() + item.slice(1))[0];
	const bookItem = booksList.filter(item => item.title.indexOf(title) !== -1)[0];

	const bookCategories = bookItem.category.indexOf('|') === -1 ?
		bookItem.category :
		bookItem.category.split('|');

	let bookItems = (typeof bookCategories === 'string') ?
		booksList.filter(item => item.category.indexOf(bookCategories) !== -1) :
		booksList.filter(item => item.category.indexOf(bookCategories[0]) !== -1);

	bookItems.splice(bookItems.indexOf(bookItem), 1);

	function shuffle(a) {
		const arr = a;
		for (let i = arr.length - 1; i > 0; i -= 1) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		return arr;
	}

	bookItems = shuffle(bookItems);

	return (
		<section>
			<Breadcrumbs />
			<Profile book={bookItem} extraBooks={bookItems} />
		</section>
	);
};

Book.propTypes = {
	match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Book;
