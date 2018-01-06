import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import Gallery from './Gallery';
import Breadcrumbs from './Breadcrumbs';

const booksList = require('../../data/users.json');

const Author = ({ match }) => {
	const nameStr = match.params.authorName;
	const authorName = `${nameStr[0].toUpperCase()}${nameStr.slice(1, nameStr.indexOf('-'))} ${(nameStr.slice(nameStr.indexOf('-') + 1, nameStr.indexOf('-') + 2)).toUpperCase()}${nameStr.slice(nameStr.indexOf('-') + 2)}`;
	const categorized = booksList.filter(item => item.author.indexOf(authorName) !== -1);
	return (
		<section>
			<Header />
			<Breadcrumbs />
			<Gallery booksList={categorized} />
			<Footer />
		</section>
	);
};

Author.propTypes = {
	match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Author;
