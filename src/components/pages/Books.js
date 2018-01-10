import React from 'react';
import Header from '../units/Header';
import Footer from '../units/Footer';
import Gallery from '../units/Gallery';
import Breadcrumbs from '../units/Breadcrumbs';

export default class Books extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			toFilter: '',
		};

		this.getStringToFilter = this.getStringToFilter.bind(this);
	}

	getStringToFilter(event) {
		const stringToFilter = event.target.value;
		this.setState({
			toFilter: stringToFilter,
		});
	}

	render() {
		return (
			<section>
				<Header getStringToFilter={this.getStringToFilter} />
				<Breadcrumbs />
				<Gallery toFilter={this.state.toFilter} />
				<Footer />
			</section>
		);
	}
}
