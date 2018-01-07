import React from 'react';
import Header from '../units/Header';
import Footer from '../units/Footer';
import Slider from '../units/slider/Slider';
import Carousel from '../units/Carousel';

export default class Home extends React.Component {
	render() {
		return (
			<section>
				<Header />
				<Slider />
				<Carousel />
				<Footer />
			</section>
		);
	}
}
