import React from 'react';
import Logo from './Logo';

const facebook = require('../img/facebook.svg');
const twitter = require('../img/twitter.svg');
const tumblr = require('../img/tumblr.svg');
const instagram = require('../img/instagram.svg');
const telegram = require('../img/telegram.svg');
const whatsapp = require('../img/whatsapp.svg');

export default class Footer extends React.Component {
	render() {
		return (
			<footer>
				<Logo />

				<article className="desc">
					<p>
						<span className="site-name">ForestLib</span> - the largest literature collection available for online
						reading and downloading to the phone or computer. You can get
						acquaint with summary or read the fragment online before either
						download the book or read it online.
					</p>
				</article>

				<div className="social">
					<p>Social Networks</p>
					<a href="#"><img src={facebook} alt="facebook" />Come by Facebook</a>
					<a href="#"><img src={twitter} alt="twitter" />Subscribe to Twitter</a>
					<a href="#"><img src={tumblr} alt="tumblr" />Watch us on Tumblr</a>
					<a href="#"><img src={instagram} alt="instagram" />See what is going on</a>
					<a href="#"><img src={telegram} alt="telegram" />Join now Telegram</a>
					<a href="#"><img src={whatsapp} alt="telegram" />Stay in contact</a>
				</div>
			</footer>
		);
	}
}
