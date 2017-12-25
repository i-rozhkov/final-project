import React from 'react';
import { Link } from 'react-router-dom';

const logo = require('../img/logo.svg');

export default class Header extends React.Component {
	render() {
		return (
			<header>

				<div className="logo">
					<img src={logo} alt="logo"/>
				</div>

				<nav className="menu">
					<ul>
						<li><Link to="/books">Books</Link></li>
						<li><a href="#">Audiobooks</a></li>
						<li><a href="#">Lists</a></li>
						<li><a href="#">Categories</a></li>
					</ul>
				</nav>

				<input className="searchField" type="search" placeholder="Search for book or author"/>

				<div className="signup-form">
					<p>Sign In</p>
					<a href="#"><i className="fa fa-google-plus-square fa-2x" aria-hidden="true"></i></a>
					<a href="#"><i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i></a>
					<a href="#"><i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i></a>
				</div>

			</header>
		);
	}
}
