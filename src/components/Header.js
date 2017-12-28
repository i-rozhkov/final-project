import React from 'react';
import Social from './Social';
import SearchField from './SearchField';
import Nav from './Nav';

const logo = require('../img/logo.svg');

export default class Header extends React.Component {
	render() {
		return (
			<header>

				<div className="logo">
					<p className="logo-name">ForestLib</p>
					<img src={logo} alt="logo" />
				</div>

				<Nav />

				<SearchField />

				<Social />

			</header>
		);
	}
}
