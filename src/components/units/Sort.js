import React from 'react';
import PropTypes from 'prop-types';

export default class Sort extends React.Component {
	render() {
		return (
		<div className="sorting-container">
			Sort by
			<select id="sortingSelect" onChange={this.props.sortBooks}>
				<option style={{ display: 'none' }} />
				<option value="title">Title</option>
				<option value="author">Author</option>
				<option value="year">Year</option>
				<option value="score">Rating</option>
			</select>
		</div>);
	}
}

Sort.propTypes = {
	sortBooks: PropTypes.func.isRequired,
};
