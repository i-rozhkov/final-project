import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Header from '../units/Header';
import Footer from '../units/Footer';
import Gallery from '../units/Gallery';
import Breadcrumbs from '../units/Breadcrumbs';

export default class Books extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			booksList: [],
			immutable: [],
			type: '',
		};

		this.filterBySearch = this.filterBySearch.bind(this);
		this.pickType = this.pickType.bind(this);
	}

	componentWillMount() {
		const that = this;
		const type = this.props.match.path.slice(1);
		axios.get(`/data/${type}.json`)
			.then((response) => {
				that.setState({
					booksList: response.data,
					immutable: response.data,
					type,
				});
			});
	}

	componentWillUpdate(nextProps, nextState) {
		const that = this;
		if (this.state.type !== nextState.type) {
			axios.get(`/data/${nextState.type}.json`)
				.then((response) => {
					that.setState({
						booksList: response.data,
						immutable: response.data,
					});
				});
		}
	}

	filterBySearch(event) {
		const stringToFilter = event.target.value;
		const filteredArray = this.state.immutable.filter(item =>
			item.title.indexOf(stringToFilter) !== -1);
		this.setState({
			booksList: filteredArray,
		});
	}

	pickType(event) {
		const type = event.target.href.slice(-5);
		this.setState({
			type,
		});
	}

	render() {
		return (
			<section>
				<Header filterBySearch={this.filterBySearch} pickType={this.pickType} />
				<Breadcrumbs />
				<Gallery booksList={this.state.booksList} />
				<Footer />
			</section>
		);
	}
}

Books.propTypes = {
	match: PropTypes.objectOf(PropTypes.any).isRequired,
};
