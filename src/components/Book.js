import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Profile from './Profile';

export default class Book extends React.Component {
	render() {
		return (
			<section>
				<Header />
				<Profile />
				<Footer />
			</section>
		);
	}
}
