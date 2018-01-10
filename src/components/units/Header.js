import React from 'react';
import PropTypes from 'prop-types';
import SignUp from './SignUp';
import Nav from './Nav';
import Logo from './Logo';
import SearchField from './SearchField';

export default class Header extends React.Component {
	render() {
		return (
			<header>

				<Logo />

				<Nav />

				<SearchField getStringToFilter={this.props.getStringToFilter} />

				<SignUp />

			</header>
		);
	}
}

Header.propTypes = {
	getStringToFilter: PropTypes.func.isRequired,
};
