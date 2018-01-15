import React from 'react';
import { Link } from 'react-router-dom';

export default class SideMenu extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			categories: [
				'Horror', 'Drama', 'Documentary', 'Comedy', 'Crime', 'Mystery',
				'Romance', 'Adventure', 'Children', 'Thriller', 'Western', 'Fantasy',
				'Animation', 'Action', 'Esoteric', 'War', 'Sci-fi', 'Noir',
			],
		};

		this.renderSideList = this.renderSideList.bind(this);
	}

	renderSideList(category, index) {
		const categoryToLow = category.toLowerCase();
		return (
			<li key={index} className="side-menu-item">
				<Link to={`/category/${categoryToLow}`}>
					{category}
				</Link>
			</li>
		);
	}

	render() {
		return (
			<aside>
				<nav className="side-menu">
					<ul className="side-menu-list">
						{this.state.categories.sort().map(this.renderSideList)}
					</ul>
				</nav>
			</aside>
		);
	}
}
