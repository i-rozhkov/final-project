import React from 'react';
import PropTypes from 'prop-types';
import Header from '../units/Header';
import Footer from '../units/Footer';
import Gallery from '../units/Gallery';
import Breadcrumbs from '../units/Breadcrumbs';

const booksList = require('../../../data/books.json');

const Author = ({ match }) => {
	const nameStr = match.params.authorName;

	const authorName = `${nameStr[0].toUpperCase()}${nameStr.slice(1, nameStr.indexOf('-'))} ${(nameStr.slice(nameStr.indexOf('-') + 1, nameStr.indexOf('-') + 2)).toUpperCase()}${nameStr.slice(nameStr.indexOf('-') + 2)}`;
	const categorized = booksList.filter(item => item.author.indexOf(authorName) !== -1);
	return (
		<section className="author">
			<Header />
			<Breadcrumbs />
			<Gallery booksList={categorized} showAddButton={false} />
			<Footer />
		</section>
	);
};

Author.propTypes = {
	match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Author;
