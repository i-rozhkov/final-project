import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Header from '../units/Header';
import Footer from '../units/Footer';
import Gallery from '../units/Gallery';
import Breadcrumbs from '../units/Breadcrumbs';

export default class SubMenuItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			booksList: [],
			immutable: [],
			type: '',
		};

		this.changeId = this.changeId.bind(this);
		this.filterBooksById = this.filterBooksById.bind(this);
		this.filterBySearch = this.filterBySearch.bind(this);
	}

	componentWillMount() {
		const that = this;
		const type = this.props.match.path.slice(1, 6);
		axios.get(`/data/${type}.json`)
			.then((response) => {
				const { id } = this.props.match.params;
				const filteredBooks = this.filterBooksById(id, response.data);
				that.setState({
					booksList: filteredBooks,
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
						type: nextState.type,
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

	filterBooksById(id, resp) {
		let filteredBooks;
		const arrayToFilter = resp || this.state.immutable;
		switch (id) {
		case 'popular':
			filteredBooks = arrayToFilter.filter(item => item.score > 5);
			break;
		case 'new':
			filteredBooks = arrayToFilter.filter(item => item.year > 2010);
			break;
		case 'bestsellers':
			filteredBooks = arrayToFilter.filter(item => item.score > 8);
			break;
		default:
			break;
		}

		return filteredBooks;
	}

	changeId(event) {
		const newId = event.target.href.slice(28);
		const filteredBooks = this.filterBooksById(newId, this.state.immutable);
		this.setState({
			booksList: filteredBooks,
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
				<Header
					changeId={this.changeId}
					filterBySearch={this.filterBySearch}
					pickType={this.pickType}
				/>
				<Breadcrumbs />
				<Gallery booksList={this.state.booksList} />
				<Footer />
			</section>
		);
	}
}

SubMenuItem.propTypes = {
	match: PropTypes.objectOf(PropTypes.any).isRequired,
};
