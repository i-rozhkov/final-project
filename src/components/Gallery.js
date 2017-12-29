import React from 'react';
import PropTypes from 'prop-types';

export default class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
		};
		this.handleStateChange = this.handleStateChange.bind(this);
		this.imagesLoaded = this.imagesLoaded.bind(this);
	}

	showImage(imageUrl, index) {
		return (
			<div className="pic-holder" key={index}>
				<img
					src={imageUrl}
					alt="Book"
					onLoad={this.handleStateChange}
					onError={this.handleStateChange}
				/>
			</div>
		);
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
				{this.renderSpinner()}
				<div className="images">
					{this.props.imageUrls.map((imageUrl, index) => this.showImage(imageUrl, index))}
				</div>
			</div>
		);
	}
}

Gallery.propTypes = {
	imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};
