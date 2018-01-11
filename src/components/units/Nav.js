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
						</ul>
					</li>
					<li className="menu-item"><Link to="/audios">Audiobooks</Link>
						<ul className="submenu">
							<li className="submenu-item"><Link to="/books/bestsellers">Bestsellers</Link></li>
							<li className="submenu-item"><Link to="/books/popular">Popular Now</Link></li>
							<li className="submenu-item"><Link to="/books/new">New</Link></li>
						</ul>
					</li>
					<li className="menu-item"><Link to="/contacts">Contacts</Link></li>
				</ul>
			</nav>
		);
	}
}
