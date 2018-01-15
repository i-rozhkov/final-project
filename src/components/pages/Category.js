import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Header from '../units/Header';
import Footer from '../units/Footer';
import Gallery from '../units/Gallery';
import Breadcrumbs from '../units/Breadcrumbs';

export default class Category extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			booksList: [],
			immutable: [],
		};

		this.filterByCategory = this.filterByCategory.bind(this);
		this.filterBySearch = this.filterBySearch.bind(this);
		this.sortBooks = this.sortBooks.bind(this);
	}

	componentWillMount() {
		const that = this;
		axios.get('/data/books.json')
			.then((response) => {
				let { categoryName } = this.props.match.params;
				categoryName = categoryName[0].toUpperCase() + categoryName.slice(1);
				const categorized = this.filterByCategory(categoryName, response.data);
				that.setState({
					booksList: categorized,
					immutable: categorized,
				});
			});
	}

	componentDidUpdate(prevProps) {
		if (this.props.match !== prevProps.match) {
			const sel = document.getElementById('sortingSelect');
			sel.options[0].selected = true;
			const that = this;
			axios.get('/data/books.json')
				.then((response) => {
					let { categoryName } = this.props.match.params;
					categoryName = categoryName[0].toUpperCase() + categoryName.slice(1);
					const categorized = this.filterByCategory(categoryName, response.data);
					that.setState({
						booksList: categorized,
						immutable: categorized,
					});
				});
		}
	}

	filterByCategory(category, array) {
		const arrayToFilter = array;
		const categorized = arrayToFilter.filter(item =>
			item.category.indexOf(category) !== -1);
		return categorized;
	}

	filterBySearch(event) {
		const stringToFilter = event.target.value;
		const filteredArray = this.state.immutable.filter(item =>
			item.title.indexOf(stringToFilter) !== -1);
		this.setState({
			booksList: filteredArray,
		});
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

	render() {
		return (
			<section>
				<Header filterBySearch={this.filterBySearch} />
				<Breadcrumbs />
				<Gallery
					sortBooks={this.sortBooks}
					showAddButton={false}
					booksList={this.state.booksList}
				/>
				<Footer />
			</section>
		);
	}
}

Category.propTypes = {
	match: PropTypes.objectOf(PropTypes.any).isRequired,
};
