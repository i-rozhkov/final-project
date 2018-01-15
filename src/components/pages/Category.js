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

		this.changeCategory = this.changeCategory.bind(this);
		this.filterByCategory = this.filterByCategory.bind(this);
		this.filterBySearch = this.filterBySearch.bind(this);
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

	// componentDidUpdate(prevProps, prevState) {
	// 	if (this.state.category !== prevState.category) {
	// 		const that = this;
	// 		const type = window.location.pathname.indexOf('books') === -1 ? 'audio' : 'books';
	// 		axios.get(`/data/${type}.json`)
	// 			.then((response) => {
	// 				let { categoryName } = this.props.match.params;
	// 				categoryName = categoryName[0].toUpperCase() + categoryName.slice(1);
	// 				const categorized = this.filterByCategory(categoryName, response.data);
	// 				that.setState({
	// 					booksList: categorized,
	// 					immutable: categorized,
	// 				});
	// 			});
	// 	}
	// }

	filterByCategory(category, array) {
		const arrayToFilter = array || this.state.immutable;
		const categorized = arrayToFilter.filter(item =>
			item.category.indexOf(category) !== -1);
		return categorized;
	}

	changeCategory(event) {
		let pickedCategory = event.target.href.slice(event.target.href.indexOf('category') + 9);

		pickedCategory = pickedCategory[0].toUpperCase() + pickedCategory.slice(1);

		const categorized = this.filterByCategory(pickedCategory);

		this.setState({
			booksList: categorized,
		});
	}

	filterBySearch(event) {
		const stringToFilter = event.target.value;
		const filteredArray = this.state.immutable.filter(item =>
			item.title.indexOf(stringToFilter) !== -1);
		this.setState({
			booksList: filteredArray,
		});
	}

	render() {
		return (
			<section>
				<Header filterBySearch={this.filterBySearch} />
				<Breadcrumbs />
				<Gallery
					showAddButton={false}
					booksList={this.state.booksList}
					changeCategory={this.changeCategory}
				/>
				<Footer />
			</section>
		);
	}
}

Category.propTypes = {
	match: PropTypes.objectOf(PropTypes.any).isRequired,
};
