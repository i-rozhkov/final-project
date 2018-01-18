import React from 'react';
import Map from '../units/Map';
import Address from '../units/Address';
import Breadcrumbs from '../units/Breadcrumbs';

export default class Contacts extends React.Component {
	render() {
		return (
			<div>
				<Breadcrumbs />
				<Address />
				<Map />
			</div>
		);
	}
}
