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
			id: '',
		};

		this.pickType = this.pickType.bind(this);
		this.changeId = this.changeId.bind(this);
		this.filterBooksById = this.filterBooksById.bind(this);
		this.filterBySearch = this.filterBySearch.bind(this);
		this.sortBooks = this.sortBooks.bind(this);
	}

	componentWillMount() {
		const that = this;
		const type = window.location.pathname.indexOf('books') === -1 ? 'audio' : 'books';
		axios.get(`/data/${type}.json`)
			.then((response) => {
				const { id } = this.props.match.params;
				const filteredBooks = this.filterBooksById(id, response.data);
				that.setState({
					booksList: filteredBooks,
					immutable: filteredBooks,
					type,
					id: '',
				});
			});
	}

	componentDidUpdate(prevProps, prevState) {
		if ((this.state.type !== prevState.type) || (this.state.id !== prevState.id)) {
			const that = this;
			axios.get(`/data/${this.state.type}.json`)
				.then((response) => {
					const { id } = this.props.match.params;
					const filteredBooks = this.filterBooksById(id, response.data);
					that.setState({
						booksList: filteredBooks,
						immutable: filteredBooks,
					});
				});
		}

		if (this.props.match !== prevProps.match) {
			const sel = document.getElementById('sortingSelect');
			sel.options[0].selected = true;
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

	sortBooks() {
		const sel = document.getElementById('sortingSelect');
		const { value } = sel.options[sel.selectedIndex];
		const arrayToSort = this.state.immutable.slice();
		const sortedArray = arrayToSort.sort((a, b) => (a[value] > b[value] ? 1 : -1));
		this.setState({
			booksList: sortedArray,
		});
	}

	changeId(event) {
		const newId = event.target.href.slice(28);
		const filteredBooks = this.filterBooksById(newId, this.state.immutable);
		this.setState({
			booksList: filteredBooks,
			id: newId,
		});
	}

	pickType(event) {
		const type = event.target.href.indexOf('books') === -1 ? 'audio' : 'books';
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
				<Gallery booksList={this.state.booksList} sortBooks={this.sortBooks} />
				<Footer />
			</section>
		);
	}
}

SubMenuItem.propTypes = {
	match: PropTypes.objectOf(PropTypes.any).isRequired,
};
