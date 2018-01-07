import React from 'react';
import PropTypes from 'prop-types';

const SliderLeftArrow = ({ prevSlide }) => (
	<div className="slider-left-arrow" onClick={prevSlide} role="button" tabIndex="0">
		<img src="/src/img/slider-left-arrow.svg" alt="Left Arrow" />
	</div>
);

SliderLeftArrow.propTypes = {
	prevSlide: PropTypes.func.isRequired,
};

export default SliderLeftArrow;
