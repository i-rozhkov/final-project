import React from 'react';

const logo = require('../img/logo.svg');

export default function () {
	return (
		<header>

			<div className="logo">
				<img src={logo} alt="logo"/>
			</div>

			<nav className="menu">
				<ul>
					<li><a href="#">Books</a></li>
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
