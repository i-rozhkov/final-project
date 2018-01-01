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
							<li className="submenu-item"><Link to="/books/bestsellers">Bestsellers</Link></li>
							<li className="submenu-item"><Link to="/books/popular">Popular Now</Link></li>
							<li className="submenu-item"><Link to="/books/new">New</Link></li>
							<li className="submenu-item"><Link to="/books/categories">Categories</Link></li>
						</ul>
					</li>
					<li className="menu-item"><Link to="/audio">Audiobooks</Link>
						<ul className="submenu">
							<li className="submenu-item"><Link to="/audio/bestsellers">Bestsellers</Link></li>
							<li className="submenu-item"><Link to="/audio/popular">Popular Now</Link></li>
							<li className="submenu-item"><Link to="/audio/new">New</Link></li>
							<li className="submenu-item"><Link to="/audio/categories">Categories</Link></li>
						</ul>
					</li>
					<li className="menu-item"><Link to="/contacts">Contacts</Link></li>
				</ul>
			</nav>
		);
	}
}
