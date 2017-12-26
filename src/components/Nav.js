import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
	render() {
		return (
			<nav className="menu">
				<ul>
					<li><Link to="/books">Books</Link></li>
					<li><Link to="/audio">Audiobooks</Link></li>
					<li><Link to="/lists">Lists</Link></li>
					<li><Link to="/categories">Categories</Link></li>
				</ul>
			</nav>
		);
	}
}
