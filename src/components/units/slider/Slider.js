import React from 'react';
import axios from 'axios';
import Slide from './Slide';
import Dots from './Dots';
import SliderLeftArrow from './SliderLeftArrow';
import SliderRightArrow from './SliderRightArrow';
import Autoplay from './Autoplay';
import '../../../img/slide-1.jpg';
import '../../../img/slide-2.jpg';
import '../../../img/slide-3.jpg';
import '../../../img/slide-4.jpg';
import '../../../img/slide-5.jpg';

export default class Slider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			images: [],
			index: 0,
			translateValue: 0,
			autoplay: false,
		};

		this.goToNextSlide = this.goToNextSlide.bind(this);
		this.goToPreviousSlide = this.goToPreviousSlide.bind(this);
		this.slideWidth = this.slideWidth.bind(this);
		this.renderSlides = this.renderSlides.bind(this);
		this.handleDotClick = this.handleDotClick.bind(this);
		this.toggleAutoplay = this.toggleAutoplay.bind(this);
	}

	componentDidMount() {
		axios.get('/slider')
			.then((res) => {
				this.setState({ images: res.data });
			});
	}

	componentDidUpdate(prevProps, prevState) {
		const { autoplay } = this.state;

		if (autoplay && prevState.autoplay !== autoplay) {
			const x = window.setInterval(() => {
				this.goToNextSlide();
			}, 2500);

			this.setState({ interval: x });
		} else if (!autoplay && prevState.autoplay !== autoplay) {
			const x = window.clearInterval(this.state.interval);

			this.setState({ interval: x });
		}
	}

	goToPreviousSlide() {
		if (this.state.index === 0) {
			return this.setState({
				translateValue: this.slideWidth() * -4,
				index: 4,
			});
		}

		this.setState({
			translateValue: this.state.translateValue += this.slideWidth(),
			index: this.state.index -= 1,
		});

		return undefined;
	}

	goToNextSlide() {
		const { images } = this.state;

		if (this.state.index === images.length - 1) {
			return this.setState({
				translateValue: 0,
				index: 0,
			});
		}

		this.setState({
			translateValue: this.state.translateValue -= this.slideWidth(),
			index: this.state.index += 1,
		});

		return undefined;
	}

	slideWidth() {
		const slide = document.querySelector('.slide');
		return slide.clientWidth;
	}

	handleDotClick(i) {
		if (i === this.state.index) { return; }

		if (i > this.state.index) {
			this.setState({
				index: i,
				translateValue: -(i * this.slideWidth()),
			});
		} else {
			this.setState({
				index: i,
				translateValue: this.state.translateValue +=
				((this.state.index - i) * (this.slideWidth())),
			});
		}
	}

	toggleAutoplay() { this.setState({ autoplay: !this.state.autoplay }); }

	renderSlides() {
		const { images } = this.state;
		const slides = [];

		for (let i = 0; i < images.length; i += 1) {
			slides.push(<Slide key={i} image={images[i].image} />);
		}

		return slides;
	}

	render() {
		const {
			images, index, translateValue, autoplay,
		} = this.state;
		return (
			<div className="slider">
				<div
				className="slider-wrapper"
				style={{
					transform: `translateX(${translateValue}px)`,
					transition: 'transform ease-out 0.45s',
				}}
				>
				{ this.renderSlides() }
				</div>

				<Autoplay toggle={this.toggleAutoplay} autoplay={autoplay} />

				<Dots
				index={index}
				quantity={images.length}
				dotClick={this.handleDotClick}
				/>

				<SliderLeftArrow prevSlide={this.goToPreviousSlide} />
				<SliderRightArrow nextSlide={this.goToNextSlide} />
			</div>
		);
	}
}
