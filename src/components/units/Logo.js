import React from 'react';
import { Link } from 'react-router-dom';

const logo = require('../../img/logo.svg');

export default class Logo extends React.Component {
	render() {
		return (
			<Link className="logo-anchor" to="/">
				<div className="logo">
					<p className="logo-name site-name">ForestLib</p>
					<img src={logo} alt="logo" />
				</div>
			</Link>
		);
	}
}
