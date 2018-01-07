import React from 'react';
import PropTypes from 'prop-types';

const Autoplay = ({ toggle, autoplay }) => (
	<div className="autoplay" onClick={toggle} role="button" tabIndex="0">
		{
		autoplay ?
		<p>Disable Autoplay</p>
		: <p>Enable Autoplay</p>
		}
	</div>
);

Autoplay.propTypes = {
	toggle: PropTypes.func.isRequired,
	autoplay: PropTypes.bool.isRequired,
};

export default Autoplay;
