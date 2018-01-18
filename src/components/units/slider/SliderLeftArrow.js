import React from 'react';
import PropTypes from 'prop-types';

const leftArrow = require('../../../img/slider-left-arrow.svg');

const SliderLeftArrow = ({ prevSlide }) => (
	<div className="slider-left-arrow" onClick={prevSlide} role="button" tabIndex="0">
		<img src={leftArrow} alt="Left Arrow" />
	</div>
);

SliderLeftArrow.propTypes = {
	prevSlide: PropTypes.func.isRequired,
};

export default SliderLeftArrow;
