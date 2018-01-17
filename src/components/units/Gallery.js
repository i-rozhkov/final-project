import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Pagination from './Pagination';
import SideMenu from './SideMenu';
import Rating from './Rating';
import Modal from './Modal';
import Sort from './Sort';

const getMainCategory = (category) => {
	const indexOfDivider = category.indexOf('|');
	const mainCategory = indexOfDivider === -1 ? category : category.slice(0, indexOfDivider);
	return mainCategory.toLowerCase();
};

const getGalleryTitle = () => {
	let path = window.location.pathname.slice(window.location.pathname.indexOf('/', 2) + 1);
	path = path.replace('/', '');
	path = path.split('-').map(item => item[0].toUpperCase() + item.slice(1)).join(' ');
	return path;
};

export default class Gallery extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			exampleItems: [],
			pageOfItems: [],
			isOpen: false,
		};

		this.handleStateChange = this.handleStateChange.bind(this);
		this.imagesLoaded = this.imagesLoaded.bind(this);
		this.onChangePage = this.onChangePage.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.addToLibrary = this.addToLibrary.bind(this);
		this.renderAddButton = this.renderAddButton.bind(this);
	}

	componentWillMount() {
		this.setState({
			exampleItems: this.props.booksList,
		});
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.booksList !== nextProps.booksList) {
			this.setState({
				exampleItems: nextProps.booksList,
			});
		}
	}

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
				<Link to={`/category/${getMainCategory(item.category)}/${item.title.toLowerCase().replace(/ /g, '-')}`}>
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
					<Link to={`/category/${getMainCategory(item.category)}/${item.title.toLowerCase().replace(/ /g, '-')}`}>
						{item.title}
					</Link>
				</p>
				<p className="gallery-item-author">
					<Link to={`/author/${item.author.toLowerCase().replace(' ', '-')}`}>
						{item.author}
					</Link>
				</p>
				<div className="gallery-item-score"><Rating value={(item.score) / 2} size={28} /></div>
			</div>
		);
	}

	toggleModal() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}

	addToLibrary() {
		const author = document.getElementById('author').value;
		const title = document.getElementById('title').value;
		const year = document.getElementById('year').value;
		const summary = document.getElementById('summary').value;
		const score = document.getElementById('score').value;
		const category = document.getElementById('category').value;
		const image = document.getElementById('image').value;

		const addedToItems = this.state.exampleItems;

		addedToItems.push({
			id: this.state.exampleItems.length + 1,
			author,
			title,
			year,
			summary,
			score,
			category,
			image,
		});

		return this.setState({
			exampleItems: addedToItems,
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

	renderAddButton() {
		if (this.props.showAddButton) {
			return <button className="add-book" onClick={this.toggleModal}>Add to Library</button>;
		}
		return undefined;
	}

	render() {
		return (
			<div className="gallery" ref={(c) => { this.gallery = c; }}>
				<SideMenu />
				<div className="images">
					<p className="gallery-title">{getGalleryTitle()}</p>
					<Sort sortBooks={this.props.sortBooks} />
					{this.renderSpinner()}
					{this.state.pageOfItems.map(item => this.showImage(item))}
					{this.renderAddButton()}
					<Pagination
						items={this.state.exampleItems}
						onChangePage={this.onChangePage}
					/>
					<Modal
						show={this.state.isOpen}
						onClose={this.toggleModal}
						toAdd={this.addToLibrary}
					>
						Some content for the modal
					</Modal>
				</div>
			</div>
		);
	}
}

Gallery.propTypes = {
	booksList: PropTypes.arrayOf(PropTypes.object),
	showAddButton: PropTypes.bool,
	sortBooks: PropTypes.func,
};

Gallery.defaultProps = {
	booksList: [],
	showAddButton: true,
	sortBooks: () => {},
};
