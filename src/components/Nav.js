import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
	render() {
		return (
			<nav className="menu">
				<ul className="menu-list">
					<li className="menu-item"><Link to="/">Home</Link></li>
					<li className="menu-item"><Link to="/books">Books</Link>
						<ul className="submenu">
							<li className="submenu-item"><Link to="/">Bestsellers</Link></li>
							<li className="submenu-item"><Link to="/">Popular Now</Link></li>
							<li className="submenu-item"><Link to="/">New</Link></li>
							<li className="submenu-item"><Link to="/">Categories</Link></li>
						</ul>
					</li>
					<li className="menu-item"><Link to="/audio">Audiobooks</Link>
						<ul className="submenu">
							<li className="submenu-item"><Link to="/">Bestsellers</Link></li>
							<li className="submenu-item"><Link to="/">Popular Now</Link></li>
							<li className="submenu-item"><Link to="/">New</Link></li>
							<li className="submenu-item"><Link to="/">Categories</Link></li>
						</ul>
					</li>
					<li className="menu-item"><Link to="/contacts">Contacts</Link></li>
					<li className="menu-item"><Link to="/about">About</Link></li>
				</ul>
			</nav>
		);
	}
}
