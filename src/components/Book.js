import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Book extends React.Component {
	render() {
		return (
			<section>
				<Header />
				<Footer />
			</section>
		);
	}
}
