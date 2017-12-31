import React from 'react';
import Social from './Social';
import SearchField from './SearchField';
import Nav from './Nav';
import Logo from './Logo';

export default class Header extends React.Component {
	render() {
		return (
			<header>

				<Logo />

				<Nav />

				<SearchField />

				<Social />

			</header>
		);
	}
}
