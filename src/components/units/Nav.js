import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
	render() {
		return (
			<nav className="menu">
				<ul className="menu-list">
					<li className="menu-item"><Link to="/">Home</Link></li>
					<li className="menu-item"><Link to="/books" onClick={this.props.changeId}>Books</Link>
						<ul className="submenu">
							<li className="submenu-item"><Link to="/books/bestsellers" onClick={this.props.changeId}>Bestsellers</Link></li>
							<li className="submenu-item"><Link to="/books/popular" onClick={this.props.changeId}>Popular Now</Link></li>
							<li className="submenu-item"><Link to="/books/new" onClick={this.props.changeId}>New</Link></li>
						</ul>
					</li>
					<li className="menu-item"><Link to="/audio" onClick={this.props.changeId}>Audiobooks</Link>
						<ul className="submenu">
							<li className="submenu-item"><Link to="/audio/bestsellers" onClick={this.props.changeId}>Bestsellers</Link></li>
							<li className="submenu-item"><Link to="/audio/popular" onClick={this.props.changeId}>Popular Now</Link></li>
							<li className="submenu-item"><Link to="/audio/new" onClick={this.props.changeId}>New</Link></li>
						</ul>
					</li>
					<li className="menu-item"><Link to="/contacts">Contacts</Link></li>
				</ul>
			</nav>
		);
	}
}

Nav.propTypes = {
	changeId: PropTypes.func.isRequired,
};
