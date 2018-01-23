import React from 'react';
import Map from '../units/Map';
import Address from '../units/Address';

export default class Contacts extends React.Component {
	render() {
		return (
			<section>
				<Address />
				<Map />
			</section>
		);
	}
}
