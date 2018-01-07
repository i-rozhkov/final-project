import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
	'Horror', 'Drama', 'Documentary', 'Comedy', 'Crime', 'Mystery',
	'Romance', 'Adventure', 'Children', 'Thriller', 'Western', 'Fantasy',
	'Animation', 'Action', 'Esoteric', 'War', 'Sci-fi', 'Noir',
];

const renderSideList = (category, index) => {
	const categoryToLow = category.toLowerCase();
	return (
		<li key={index} className="side-menu-item">
			<Link to={`/category/${categoryToLow}`}>
				{category}
			</Link>
		</li>
	);
};

export default class SubMenu extends React.Component {
	render() {
		return (
			<aside>
				<nav className="side-menu">
					<ul className="side-menu-list">
						{categories.sort().map(renderSideList)}
					</ul>
				</nav>
			</aside>
		);
	}
}
