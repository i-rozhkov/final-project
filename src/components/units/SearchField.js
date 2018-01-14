import React from 'react';
import PropTypes from 'prop-types';

export default class SearchField extends React.Component {
	render() {
		return (
			<input
				className="searchField"
				type="search"
				placeholder="Search for book or author"
				onChange={this.props.filterBySearch}
			/>
		);
	}
}

SearchField.propTypes = {
	filterBySearch: PropTypes.func.isRequired,
};
