import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Gallery from '../units/Gallery';
import Breadcrumbs from '../units/Breadcrumbs';

export default class Category extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			booksList: [],
		};

		this.filterByCategory = this.filterByCategory.bind(this);
	}

	componentWillMount() {
		const that = this;
		axios.get('/data/books.json')
			.then((response) => {
				that.setState({
					booksList: response.data,
					immutable: response.data,
				});
			});
		axios.get('/data/audio.json')
			.then((response) => {
				that.setState({
					booksList: this.state.booksList.concat(response.data),
					immutable: this.state.booksList.concat(response.data),
				});

				let { categoryName } = this.props.match.params;
				categoryName = categoryName[0].toUpperCase() + categoryName.slice(1);
				const categorized = this.filterByCategory(categoryName, this.state.immutable);

				this.setState({
					booksList: categorized,
					immutable: categorized,
				});
			});
	}

	componentWillReceiveProps(prevProps) {
		if (this.props.match !== prevProps.match) {
			const sel = document.getElementById('sortingSelect');
			sel.options[0].selected = true;

			const that = this;
			axios.get('/data/books.json')
				.then((response) => {
					that.setState({
						booksList: response.data,
						immutable: response.data,
					});
				});
			axios.get('/data/audio.json')
				.then((response) => {
					that.setState({
						booksList: this.state.booksList.concat(response.data),
						immutable: this.state.booksList.concat(response.data),
					});

					let { categoryName } = this.props.match.params;
					categoryName = categoryName[0].toUpperCase() + categoryName.slice(1);
					const categorized = this.filterByCategory(categoryName, this.state.immutable);

					this.setState({
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

	render() {
		return (
			<section>
				<Breadcrumbs />
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
};
