import React from 'react';
import PropTypes from 'prop-types';
import Gallery from '../units/Gallery';
import Breadcrumbs from '../units/Breadcrumbs';

export default class Books extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			booksList: this.props.booksList,
		};

		this.sortBooks = this.sortBooks.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.booksList !== nextProps.booksList) {
			const sel = document.getElementById('sortingSelect');
			sel.options[0].selected = true;
			this.setState({
				booksList: nextProps.booksList,
			});
		}
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
				<Breadcrumbs />
				<Gallery
					booksList={this.state.booksList}
					sortBooks={this.sortBooks}
				/>
			</section>
		);
	}
}

Books.propTypes = {
	booksList: PropTypes.arrayOf(PropTypes.object).isRequired,
	// match: PropTypes.objectOf(PropTypes.any).isRequired,
};
