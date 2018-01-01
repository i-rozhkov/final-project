import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

export default class Gallery extends React.Component {
	constructor(props) {
		super(props);
		let exampleItems = [];

		exampleItems = this.props.imageUrls.map((i, index) => ({
			id: index,
			url: i,
		}));

		this.state = {
			loading: true,
			exampleItems,
			pageOfItems: [],
		};

		this.handleStateChange = this.handleStateChange.bind(this);
		this.imagesLoaded = this.imagesLoaded.bind(this);
		this.onChangePage = this.onChangePage.bind(this);
	}

	onChangePage(pageOfItems) {
		// update state with new page of items
		this.setState({ pageOfItems });
	}

	imagesLoaded(parentNode) {
		const imgElements = parentNode.querySelectorAll('img');
		const isCompleted = Array.prototype.map.call(imgElements, (img => !img.complete));
		return isCompleted.indexOf(false) !== -1;
	}

	handleStateChange() {
		const galleryElement = this.gallery;
		this.setState({
			loading: !this.imagesLoaded(galleryElement),
		});
	}

	showImage(imageUrl, index) {
		return (
			<div className="pic-holder" key={index}>
				<Link to={`/books/${index}`}>
					<img
						src={imageUrl}
						alt="Book"
						onLoad={this.handleStateChange}
						onError={this.handleStateChange}
					/>
				</Link>
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
				<div className="images">
					{this.renderSpinner()}
					{this.state.pageOfItems.map(item => this.showImage(item.url, item.id))}
					<Pagination
						items={this.state.exampleItems}
						onChangePage={this.onChangePage}
					/>
				</div>
			</div>
		);
	}
}

Gallery.propTypes = {
	imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};
