import React from 'react';
import PropTypes from 'prop-types';

export default class SearchField extends React.Component {
	constructor(props) {
		super(props);

		this.handleEnter = this.handleEnter.bind(this);
	}

	handleEnter(e) {
		if (e.key === 'Enter') {
			window.location.assign(`http://localhost:8080/books/${e.target.value}`);
		}
	}

	render() {
		return (
			<input
				className="searchField"
				type="search"
				placeholder="Search for book or author"
				onChange={this.props.filterBySearch}
				onKeyPress={this.handleEnter}
			/>
		);
	}
}

SearchField.propTypes = {
	filterBySearch: PropTypes.func.isRequired,
};
