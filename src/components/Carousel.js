import React from 'react';
import PropTypes from 'prop-types';

export default class Carousel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeIndex: 0,
		};
	}

	goToPrevSlide(e) {
		e.preventDefault();

		let index = this.state.activeIndex;
		const { slides } = this.props;
		const slidesLength = slides.length;

		if (index < 1) {
			index = slidesLength;
		}

		index -= 1;

		this.setState({
			activeIndex: index,
		});
	}

	goToNextSlide(e) {
		e.preventDefault();

		let index = this.state.activeIndex;
		const { slides } = this.props;
		const slidesLength = slides.length - 1;

		if (index === slidesLength) {
			index = -1;
		}

		index += 1;

		this.setState({
			activeIndex: index,
		});
	}

	render() {
		return (
			<div className="carousel">
				<a
					href="#"
					className="carousel__arrow carousel__arrow--left"
					onClick={e => this.goToPrevSlide(e)}>
					<span className="fa fa-2x fa-angle-left" />
				</a>

				<ul className="carousel__slides">
					{this.props.slides.map((slide, index) =>
						<li
							className={
								index === this.state.activeIndex
									? 'carousel__slide carousel__slide--active'
									: 'carousel__slide'
							}
							key={index}>
							<p className="carousel-slide__content">{slide.content}</p>

							<p>
								<strong className="carousel-slide__author">
									{slide.author}
								</strong>,
								{' '}<small className="carousel-slide__source">
									{slide.source}
								</small>
							</p>
						</li>)}
				</ul>

				<a
					href="#"
					className="carousel__arrow carousel__arrow--right"
					onClick={e => this.goToNextSlide(e)}>
					<span className="fa fa-2x fa-angle-right" />
				</a>

				<ul className="carousel__indicators">
					{this.props.slides.map((slide, index) =>
						<li key={index}>
							<a
								className={
									index === this.state.activeIndex
										? 'carousel__indicator carousel__indicator--active'
										: 'carousel__indicator'
								}
								onClick={() => this.goToSlide(index)}/>
						</li>)}
				</ul>
			</div>
		);
	}
}

Carousel.propTypes = {
	slides: PropTypes.array,
};
