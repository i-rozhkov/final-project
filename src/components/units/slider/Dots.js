import React from 'react';
import PropTypes from 'prop-types';
import Dot from './Dot';

const Dots = ({ index, quantity, dotClick }) => {
	const dots = [];

	for (let i = 0; i < quantity; i += 1) {
		const isActive = i === index;

		dots.push(<Dot
			key={i}
			id={i}
			active={isActive}
			dotClick={dotClick}
		/>);
	}

	return (
		<div className="dots-container">
			{ dots }
		</div>
	);
};

Dots.propTypes = {
	index: PropTypes.number.isRequired,
	quantity: PropTypes.number.isRequired,
	dotClick: PropTypes.func.isRequired,
};

export default Dots;
