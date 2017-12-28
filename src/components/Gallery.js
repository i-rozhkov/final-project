import React from 'react';
import PropTypes from 'prop-types';

export default class Gallery extends React.Component {
	showImage(imageUrl, index) {
		return (
			<div key={index}>
				<img src={imageUrl} alt="Book" />
			</div>
		);
	}

	render() {
		return (
			<div className="gallery">
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
