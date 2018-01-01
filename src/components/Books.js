import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Gallery from './Gallery';

const pattern = [
	'https://picsum.photos/200/300',
	'https://picsum.photos/300/300',
	'https://picsum.photos/250/200',
	'https://picsum.photos/250/250',
	'https://picsum.photos/250/300',
	'https://picsum.photos/300/250',
];

const urls = [];

for (let i = 1; i <= 25; i += 1) {
	for (let j = 0; j < pattern.length; j += 1) {
		urls.push(pattern[j]);
	}
}

export default class Books extends React.Component {
	render() {
		return (
			<section>
				<Header />
				<Gallery imageUrls={urls} />
				<Footer />
			</section>
		);
	}
}
