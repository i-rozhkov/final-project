import React from 'react';
import Header from '../units/Header';
import Footer from '../units/Footer';
import Gallery from '../units/Gallery';
import Breadcrumbs from '../units/Breadcrumbs';

export default class Books extends React.Component {
	render() {
		return (
			<section>
				<Header />
				<Breadcrumbs />
				<Gallery />
				<Footer />
			</section>
		);
	}
}
