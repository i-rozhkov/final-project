import React from 'react';
import { Link } from 'react-router-dom';

const generateBreadCrumb = (pathname) => {
	let paths = pathname.split('/');

	// remove the last element if there was a / at the end of the pathname
	paths = paths[paths.length - 1] === '/' ? paths.slice(0, paths.length - 1) : paths;

	// remove the first element if the second one is an empty string
	paths = paths[1] === '' ? paths.slice(1) : paths;

	return paths.map((path, index) => {
		// The first element receive the <Link> React element
		if (index === 0) {
			return (
				<li className="breadcrumb-item" key={index}>
					<Link to="/">
						<i className="fa fa-home" aria-hidden="true" />
					</Link>
				</li>);
		}

		// Build the path for the current URL
		const url = `${paths.slice(0, index + 1).join('/')}`;

		if (index === paths.length - 1) {
			return (
				<li className="breadcrumb-item" style={{ zIndex: 10 - index }} key={index}>
					<Link to={url}>{path.split('-').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')}</Link>
				</li>);
		}

		// HTML structure for every link except the first
		return (<li className="breadcrumb-item" style={{ zIndex: 10 - index }} key={index}><Link to={url}>{path[0].toUpperCase() + path.slice(1)}</Link></li>);
	});
};

export default class Breadcrumbs extends React.Component {
	render() {
		return (
			<ul className="breadcrumb-list">
				{ generateBreadCrumb(window.location.pathname) }
			</ul>
		);
	}
}
