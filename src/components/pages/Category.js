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
	}

	componentWillMount() {
		const that = this;
		axios.get('/data/books.json')
			.then((response) => {
				that.setState({
					unitedResponse: response.data,
				});
			});
		axios.get('/data/audio.json')
			.then((response) => {
				that.setState({
					unitedResponse: this.state.unitedResponse.concat(response.data),
				});

				let { categoryName } = this.props.match.params;
				categoryName = categoryName[0].toUpperCase() + categoryName.slice(1);
				this.filterByCategory(categoryName, this.state.unitedResponse);
			});
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
			this.setState({
				booksList: filteredArray,
			});
		}
	}

	filterByCategory(category, array) {
		const arrayToFilter = array.slice();
		const categorized = arrayToFilter.filter(item =>
			item.category.indexOf(category) !== -1);
		this.setState({
			booksList: categorized,
			immutableSearch: categorized,
		});
	}

	render() {
		return (
			<section>
				<Gallery
					sortBooks={this.sortBooks}
					showAddButton={false}
					booksList={shuffle(this.state.booksList)}
				/>
			</section>
		);
	}
}

Category.propTypes = {
	match: PropTypes.objectOf(PropTypes.any).isRequired,
	searchString: PropTypes.string.isRequired,
};
