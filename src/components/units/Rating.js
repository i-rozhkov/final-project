import React, { Component } from 'react';
import PropTypes from 'prop-types';

const parentStyles = {
	overflow: 'hidden',
	position: 'relative',
};

const defaultStyles = {
	position: 'relative',
	overflow: 'hidden',
	cursor: 'pointer',
	display: 'block',
	float: 'left',
	outline: 'none',
};

function getHalfStarStyles(color, uniqueness) {
	return `.react-stars-${uniqueness}:before {
		position: absolute;
		overflow: hidden;
		display: block;
		z-index: 1;
		top: 0;
		left: 0;
		content: attr(data-forhalf);
		width: 50%;
		color: ${color};
	}
	.react-stars-${uniqueness}:hover:before {
		width: 50%;
		color: ${color};
	}`;
}

export default class Rating extends Component {
	constructor(props) {
		super(props);
		// set defaults

		this.state = {
			uniqueness: `${Math.random()}`.replace('.', ''),
			value: this.props.value || 0,
			stars: [],
			halfStar: {
				at: Math.floor(this.props.value),
				hidden: this.props.half && this.props.value % 1 < 0.5,
			},
		};

		this.state.config = {
			count: this.props.count,
			size: this.props.size,
			char: this.props.char,
			// default color of inactive star
			color1: this.props.color1,
			// color of an active star
			color2: this.props.color2,
			half: this.props.half,
			edit: this.props.edit,
		};

		this.mouseOver = this.mouseOver.bind(this);
		this.mouseLeave = this.mouseLeave.bind(this);
		this.clicked = this.clicked.bind(this);
	}

	/* eslint-disable */

	componentDidMount() {
		this.setState({
			stars: this.getStars(this.state.value),
		});
	}

	/* eslint-enable */

	componentWillReceiveProps(props) {
		this.setState({
			stars: this.getStars(props.value),
			value: props.value,
			halfStar: {
				at: Math.floor(props.value),
				hidden: this.state.config.half && props.value % 1 < 0.5,
			},
		});
	}

	getRate() {
		let stars;
		if (this.state.config.half) {
			stars = Math.floor(this.state.value);
		} else {
			stars = Math.round(this.state.value);
		}
		return stars;
	}

	getStars(activeCount) {
		let activeC = activeCount;
		if (typeof activeC === 'undefined') {
			activeC = this.getRate();
		}
		const stars = [];
		for (let i = 0; i < this.state.config.count; i += 1) {
			stars.push({
				active: i <= activeC - 1,
			});
		}
		return stars;
	}

	isDecimal(value) {
		return value % 1 !== 0;
	}

	mouseOver(event) {
		const { config, halfStar } = this.state;
		if (!config.edit) return;
		let index = Number(event.target.getAttribute('data-index'));
		if (config.half) {
			const isAtHalf = this.moreThanHalf(event, config.size);
			halfStar.hidden = isAtHalf;
			if (isAtHalf) index += 1;
			halfStar.at = index;
		} else {
			index += 1;
		}
		this.setState({
			stars: this.getStars(index),
		});
	}

	moreThanHalf(event, size) {
		const { target } = event;
		let mouseAt = event.clientX - target.getBoundingClientRect().left;
		mouseAt = Math.round(Math.abs(mouseAt));
		return mouseAt > size / 2;
	}

	mouseLeave() {
		const { value, halfStar, config } = this.state;
		if (!config.edit) return;
		if (config.half) {
			halfStar.hidden = !this.isDecimal(value);
			halfStar.at = Math.floor(this.state.value);
		}
		this.setState({
			stars: this.getStars(),
		});
	}

	clicked(event) {
		const { config, halfStar } = this.state;
		if (!config.edit) return;
		let index = Number(event.target.getAttribute('data-index'));
		let value;
		if (config.half) {
			const isAtHalf = this.moreThanHalf(event, config.size);
			halfStar.hidden = isAtHalf;
			if (isAtHalf) index += 1;
			value = isAtHalf ? index : index + 0.5;
			halfStar.at = index;
		} else {
			index += 1;
			value = index;
		}
		this.setState({
			value,
			stars: this.getStars(index),
		});
	}

	renderHalfStarStyleElement() {
		const { config, uniqueness } = this.state;
		return (
			<style>
				{getHalfStarStyles(config.color2, uniqueness)};
			</style>
		);
	}

	renderStars() {
		const {
			halfStar, stars, uniqueness, config,
		} = this.state;
		const {
			color1, color2, size, char, half, edit,
		} = config;
		return stars.map((star, i) => {
			let starClass = '';
			if (half && !halfStar.hidden && halfStar.at === i) {
				starClass = `react-stars-${uniqueness}`;
			}
			const style = Object.assign({}, defaultStyles, {
				color: star.active ? color2 : color1,
				cursor: edit ? 'pointer' : 'default',
				fontSize: `${size}px`,
			});
			return (
				/* eslint-disable */
				<span
				className={starClass}
				style={style}
				key={i}
				data-index={i}
				data-forhalf={char}
				onMouseOver={this.mouseOver}
				onFocus={() => undefined}
				onMouseMove={this.mouseOver}
				onMouseLeave={this.mouseLeave}
				onClick={this.clicked}
				role="button"
				tabIndex="0">
				{char}
				</span>
				/* eslint-enable */
			);
		});
	}

	render() {
		return (
		<div className="rating" style={parentStyles}>
			{this.state.config.half ?
			this.renderHalfStarStyleElement() : ''}
			{this.renderStars()}
		</div>
		);
	}
}

Rating.propTypes = {
	edit: PropTypes.bool,
	half: PropTypes.bool,
	value: PropTypes.number,
	count: PropTypes.number,
	char: PropTypes.string,
	size: PropTypes.number,
	color1: PropTypes.string,
	color2: PropTypes.string,
};

Rating.defaultProps = {
	edit: true,
	half: true,
	value: 0,
	count: 5,
	char: '★',
	size: 32,
	color1: '#46344E',
	color2: '#FFF44F',
};
