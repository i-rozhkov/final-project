import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
	render() {
		// Render nothing if the "show" prop is false
		if (!this.props.show) {
			return null;
		}

		return (
			<div className="backdrop">
				<div className="modal">

				<form className="modal-form">
					<p>Book title</p>
					<input type="text" id="title" />
					<p>Author</p>
					<input type="text" id="author" />
					<p>Publication year</p>
					<input type="number" id="year" max="2018" min="1850" />
					<p>Cover url</p>
					<input type="text" id="image" />
					<p>Category</p>
					<input type="text" id="category" />
					<p>Summary</p>
					<textarea id="summary" />
					<p>Your score</p>
					<input type="number" min="0" max="10" id="score" />
				</form>

				<button className="add" onClick={() => { this.props.toAdd(); this.props.onClose(); }}>
					Add
				</button>
				<button className="close" onClick={this.props.onClose}>
					Close
				</button>
				</div>
			</div>
		);
	}
}

Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
	toAdd: PropTypes.func.isRequired,
};

export default Modal;
