import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
	render() {
		return (
			<nav className="menu">
				<ul className="menu-list">
					<li className="menu-item"><Link to="/">Home</Link></li>
					<li className="menu-item"><Link to="/books" onClick={this.props.pickType}>Books</Link>
						<ul className="submenu">
							<li className="submenu-item"><Link to="/books/bestsellers" onClick={(event) => { this.props.changeId(event); this.props.pickType(event); }}>Bestsellers</Link></li>
							<li className="submenu-item"><Link to="/books/popular" onClick={(event) => { this.props.changeId(event); this.props.pickType(event); }}>Popular Now</Link></li>
							<li className="submenu-item"><Link to="/books/new" onClick={(event) => { this.props.changeId(event); this.props.pickType(event); }}>New</Link></li>
						</ul>
					</li>
					<li className="menu-item"><Link to="/audio" onClick={this.props.pickType}>Audiobooks</Link>
						<ul className="submenu">
							<li className="submenu-item"><Link to="/audio/bestsellers" onClick={(event) => { this.props.changeId(event); this.props.pickType(event); }}>Bestsellers</Link></li>
							<li className="submenu-item"><Link to="/audio/popular" onClick={(event) => { this.props.changeId(event); this.props.pickType(event); }}>Popular Now</Link></li>
							<li className="submenu-item"><Link to="/audio/new" onClick={(event) => { this.props.changeId(event); this.props.pickType(event); }}>New</Link></li>
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
	pickType: PropTypes.func.isRequired,
};
