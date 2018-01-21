import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Gallery from '../units/Gallery';

function shuffle(a) {
	const arr = a;
	for (let i = arr.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}

export default class Category extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			booksList: [],
			immutableSearch: [],
			unitedResponse: [],
		};

		this.filterByCategory = this.filterByCategory.bind(this);
		this.sortBooks = this.sortBooks.bind(this);
	}

	componentWillMount() {
		axios.all([
			axios.get('http://localhost:8080/data/books.json'),
			axios.get('http://localhost:8080/data/audio.json'),
		])
			.then(axios.spread((books, audio) => {
				const lib = books.data.concat(audio.data);
				this.setState({
					unitedResponse: lib,
				});
				let { categoryName } = this.props.match.params;
				categoryName = categoryName[0].toUpperCase() + categoryName.slice(1);
				this.filterByCategory(categoryName, lib);
			}));
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.match.params.categoryName !== nextProps.match.params.categoryName) {
			const sel = document.getElementById('sortingSelect');
			sel.options[0].selected = true;

			let { categoryName } = nextProps.match.params;
			categoryName = categoryName[0].toUpperCase() + categoryName.slice(1);
			this.filterByCategory(categoryName, this.state.unitedResponse);
		}

		if (this.props.searchString !== nextProps.searchString) {
			const booksToSearch = this.state.immutableSearch.slice();
			const filteredArray = booksToSearch.filter(item =>
				item.title.indexOf(nextProps.searchString) !== -1);
			if (filteredArray.length) {
				this.setState({
					booksList: filteredArray,
				});
			}
		}
	}

	filterByCategory(category, array) {
		const arrayToFilter = array.slice();
		const categorized = arrayToFilter.filter(item =>
			item.category.indexOf(category) !== -1);
		this.setState({
			booksList: shuffle(categorized),
			immutableSearch: categorized,
		});
	}

	sortBooks() {
		const sel = document.getElementById('sortingSelect');
		const { value } = sel.options[sel.selectedIndex];
		const arrayToSort = this.state.booksList.slice();
		let sortedArray = arrayToSort.sort((a, b) => (a[value] > b[value] ? 1 : -1));
		sortedArray = value === 'score' ? sortedArray.reverse() : sortedArray;
		this.setState({
			booksList: sortedArray,
		});
	}

	render() {
		return (
			<section>
				<Gallery
					sortBooks={this.sortBooks}
					showAddButton={false}
					booksList={this.state.booksList}
				/>
			</section>
		);
	}
}

Category.propTypes = {
	match: PropTypes.objectOf(PropTypes.any).isRequired,
	searchString: PropTypes.string.isRequired,
};
