import React from 'react';

const logo = require('../img/logo.svg');

export default class Logo extends React.Component {
	render() {
		return (
			<div className="logo">
				<p className="logo-name">ForestLib</p>
				<img src={logo} alt="logo" />
			</div>
		);
	}
}
