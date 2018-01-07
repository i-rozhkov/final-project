import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ image }) => {
	const styles = {
		backgroundImage: `url(/src/img/${image}.jpg)`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50% 60%',
	};

	return (<div className="slide" style={styles} />);
};

export default Slide;

Slide.propTypes = {
	image: PropTypes.string.isRequired,
};
