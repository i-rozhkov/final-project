import React from 'react';
import Header from './Header';
import Carousel from './Carousel';
import Gallery from './Gallery';
import Footer from './Footer';

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


// Data for carousel
const carouselSlidesData = [
	{
		content:
	'Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.',
		author: 'Bane',
		source: 'facebook',
	}, {
		content:
	'You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.',
		author: "Ra's Al Ghul",
		source: 'Snapchat',
	}, {
		content:
	"Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
		author: 'Joker',
		source: 'facebook',
	}, {
		content:
	"I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
		author: 'Bruce Wayne',
		source: 'facebook',
	}, {
		content:
	"But it's not who you are underneath... it's what you do that defines you.",
		author: 'Rachel Dawes',
		source: 'twitter',
	}, {
		content:
	"When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn't considered an honor, it was a public service.",
		author: 'John Blake',
		source: 'Google+',
	},
	{
		content:
	"Master Wayne, you've been gone a long time. You look very fashionable. Apart from the mud.",
		author: 'Alfred Pennyworth',
		source: 'twitter',
	},
];

export default class Home extends React.Component {
	render() {
		return (
			<section>
				<Header />
				<div className="carousel-container">
					<Carousel slides={carouselSlidesData} />
				</div>
				<Gallery imageUrls={urls} />
				<Footer />
			</section>
		);
	}
}
