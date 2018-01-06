import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Gallery from './Gallery';

const booksList = require('../../data/users.json');

export default class Books extends React.Component {
	render() {
		return (
			<section>
				<Header />
				<Gallery booksList={booksList} />
				<Footer />
			</section>
		);
	}
}
