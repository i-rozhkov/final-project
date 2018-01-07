import React from 'react';
import PropTypes from 'prop-types';

const Dot = ({ id, active, dotClick }) => {
	const name = active ? 'dot active' : 'dot';

	return (
		<div
			data-id={id}
			className={name}
			onClick={e => dotClick(parseInt(e.target.getAttribute('data-id'), 10))}
			role="button"
			tabIndex="0"
		/>
	);
};

Dot.propTypes = {
	id: PropTypes.number.isRequired,
	active: PropTypes.bool.isRequired,
	dotClick: PropTypes.func.isRequired,
};

export default Dot;
