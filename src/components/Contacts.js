import React from 'react';
import Header from './Header';
import Map from './Map';
import Address from './Address';
import Footer from './Footer';

export default class Contacts extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Address />
				<Map />
				<Footer />
			</div>
		);
	}
}
