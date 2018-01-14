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

				<Nav changeId={this.props.changeId} pickType={this.props.pickType} />

				<SearchField filterBySearch={this.props.filterBySearch} />

				<SignUp />

			</header>
		);
	}
}

Header.propTypes = {
	filterBySearch: PropTypes.func,
	changeId: PropTypes.func,
	pickType: PropTypes.func,
};

Header.defaultProps = {
	changeId: () => {},
	filterBySearch: () => {},
	pickType: () => {},
};
