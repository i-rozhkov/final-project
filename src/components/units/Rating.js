import React from 'react';
import PropTypes from 'prop-types';

export default class Rating extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			rating: this.props.rating,
		};
	}

	rate(rating) {
		this.setState({
			rating,
		});
	}

	render() {
		const stars = [];

		for (let i = 0; i < 5; i += 1) {
			let itemClass = 'star-rating__star';

			if (this.state.rating >= i && this.state.rating != null) {
				itemClass += ' is-selected';
			}
			/* eslint-disable */
			stars.push(
			<div
				key={i}
				className={itemClass}
				onClick={this.rate(i)}
				role="button"
				tabIndex="0">
					★
            </div>);
			/* eslint-enable */
		}
		return (
			<div className="star-rating">
				{stars}
			</div>
		);
	}
}

Rating.propTypes = {
	rating: PropTypes.number,
};

Rating.defaultProps = {
	rating: null,
};
