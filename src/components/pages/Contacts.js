import React from 'react';
import Header from '../units/Header';
import Map from '../units/Map';
import Address from '../units/Address';
import Footer from '../units/Footer';
import Breadcrumbs from '../units/Breadcrumbs';

export default class Contacts extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Breadcrumbs />
				<Address />
				<Map />
				<Footer />
			</div>
		);
	}
}
