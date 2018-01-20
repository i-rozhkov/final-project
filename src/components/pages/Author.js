import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Gallery from '../units/Gallery';

export default class Author extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			booksList: [],
		};
	}

	componentWillMount() {
		const that = this;
		axios.get('/data/books.json')
			.then((response) => {
				that.setState({
					booksList: response.data,
				});
			});
		axios.get('/data/audio.json')
			.then((response) => {
				that.setState({
					booksList: this.state.booksList.concat(response.data),
				});
				const nameStr = this.props.match.params.authorName;
				const authorName = `${nameStr[0].toUpperCase()}${nameStr.slice(1, nameStr.indexOf('-'))} ${(nameStr.slice(nameStr.indexOf('-') + 1, nameStr.indexOf('-') + 2)).toUpperCase()}${nameStr.slice(nameStr.indexOf('-') + 2)}`;
				const categorized = this.state.booksList.filter(item =>
					item.author.indexOf(authorName) !== -1);
				that.setState({
					booksList: categorized,
				});
			});
	}

	render() {
		return (
			<section className="author">
				<Gallery booksList={this.state.booksList} showAddButton={false} />
			</section>
		);
	}
}

Author.propTypes = {
	match: PropTypes.objectOf(PropTypes.any).isRequired,
};
