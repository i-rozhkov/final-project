import React from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import Pagination from './Pagination';
import SideMenu from './SideMenu';

const mockdata = require('../../data/users.json');

const getMainCategory = (category) => {
	const indexOfDivider = category.indexOf('|');
	return indexOfDivider === -1 ? category : category.slice(0, indexOfDivider);
};

export default class Gallery extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			exampleItems: mockdata,
			pageOfItems: [],
		};

		this.handleStateChange = this.handleStateChange.bind(this);
		this.imagesLoaded = this.imagesLoaded.bind(this);
		this.onChangePage = this.onChangePage.bind(this);
	}

	// componentDidMount() {
	// 	const that = this;
	// 	axios.get('/books')
	// 		.then((response) => {
	// 			that.setState({
	// 				exampleItems: response.data,
	// 			});
	// 		});
	// }

	onChangePage(pageOfItems) {
		// update state with new page of items
		this.setState({ pageOfItems });
	}

	handleStateChange() {
		const galleryElement = this.gallery;
		this.setState({
			loading: !this.imagesLoaded(galleryElement),
		});
	}

	imagesLoaded(parentNode) {
		const imgElements = parentNode.querySelectorAll('img');
		const isCompleted = Array.prototype.map.call(imgElements, (img => !img.complete));
		return isCompleted.indexOf(false) !== -1;
	}

	showImage(item) {
		return (
			<div className="gallery-item" key={item.id}>
				<Link to={`/categories/${getMainCategory(item.category)}/${item.title.toLowerCase().replace(/ /g, '-')}`}>
					<div className="pic-holder">
						<img
							src={item.image}
							alt="Book"
							onLoad={this.handleStateChange}
							onError={this.handleStateChange}
						/>
					</div>
				</Link>
				<p className="gallery-item-title">
					<Link to={`/categories/${getMainCategory(item.category)}/${item.title.toLowerCase().replace(/ /g, '-')}`}>
						{item.title}
					</Link>
				</p>
				<p className="gallery-item-author">
					<Link to={`/author/${item.author.toLowerCase().replace(' ', '-')}`}>
						{item.author}
					</Link>
				</p>
				<div className="gallery-item-score">{item.score}</div>
			</div>
		);
	}

	renderSpinner() {
		if (!this.state.loading) {
			// Render nothing if not loading
			return null;
		}
		return (
			<div className="loader">Loading...</div>
		);
	}


	render() {
		return (
			<div className="gallery" ref={(c) => { this.gallery = c; }}>
				<SideMenu />
				<div className="images">
					{this.renderSpinner()}
					{this.state.pageOfItems.map(item => this.showImage(item))}
					<Pagination
						items={this.state.exampleItems}
						onChangePage={this.onChangePage}
					/>
				</div>
			</div>
		);
	}
}
