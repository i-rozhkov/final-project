import React from 'react';
import PropTypes from 'prop-types';
import Header from '../units/Header';
import Footer from '../units/Footer';
import Gallery from '../units/Gallery';
import Breadcrumbs from '../units/Breadcrumbs';

const booksList = require('../../../data/books.json');

let filteredBooks;

const SubMenuItem = ({ match }) => {
	const pathName = match.params.id;

	switch (pathName) {
	case 'popular':
		filteredBooks = booksList.filter(item => item.score > 5);
		break;
	case 'new':
		filteredBooks = booksList.filter(item => item.year > 2010);
		break;
	case 'bestsellers':
		filteredBooks = booksList.filter(item => item.score > 8);
		break;
	default:
		break;
	}

	return (
		<section>
			<Header />
			<Breadcrumbs />
			<Gallery booksList={filteredBooks} />
			<Footer />
		</section>
	);
};

SubMenuItem.propTypes = {
	match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SubMenuItem;
