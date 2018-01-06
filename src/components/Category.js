import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import Gallery from './Gallery';
import Breadcrumbs from './Breadcrumbs';

const booksList = require('../../data/users.json');

const Category = ({ match }) => {
	const categoryName = match.params.categoryName[0].toUpperCase() +
		match.params.categoryName.slice(1);
	const categorized = booksList.filter(item => item.category.indexOf(categoryName) !== -1);
	return (
		<section>
			<Header />
			<Breadcrumbs />
			<Gallery booksList={categorized} />
			<Footer />
		</section>
	);
};

Category.propTypes = {
	match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Category;
