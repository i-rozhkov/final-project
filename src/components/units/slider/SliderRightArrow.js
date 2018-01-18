import React from 'react';
import PropTypes from 'prop-types';

const rightArrow = require('../../../img/slider-right-arrow.svg');

const SliderRightArrow = ({ nextSlide }) => (
	<div className="slider-right-arrow" onClick={nextSlide} role="button" tabIndex="0">
		<img src={rightArrow} alt="Right Arrow" />
	</div>
);

SliderRightArrow.propTypes = {
	nextSlide: PropTypes.func.isRequired,
};

export default SliderRightArrow;
