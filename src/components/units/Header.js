import React from 'react';
import SignUp from './SignUp';
import Nav from './Nav';
import Logo from './Logo';

export default class Header extends React.Component {
	render() {
		return (
			<header>

				<Logo />

				<Nav />

				<SignUp />

			</header>
		);
	}
}

