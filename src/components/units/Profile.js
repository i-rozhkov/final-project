import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

export default class Profile extends React.Component {
	render() {
		return (
			<section className="profile">
				<div className="book-profile">
					<div className="book-cover">
						{<img src={this.props.book.image} alt="cover" />}
					</div>
					<div className="book-description">
						<p className="book-title">{this.props.book.title}</p>
						<p className="book-author">by {this.props.book.author}</p>
						<p className="book-summary">{this.props.book.summary}</p>
						<div className="book-score"><Rating value={(this.props.book.score) / 2} /></div>
						<button className="read-button">Read</button>
					</div>
				</div>
				<aside className="extra-books">
					<p className="extra-paragraph">Read with this book</p>
					<div className="extra-container">
						<ul className="extra-list">
							<li className="extra-item">
								<div className="extra-cover">
									<img src="https://picsum.photos/80/100" alt="extra book" />
								</div>
								<div className="extra-description">
									<p className="extra-title">Extra title</p>
									<p className="extra-author">by Extra author</p>
									<div className="extra-score">Extra score</div>
								</div>
							</li>
							<li className="extra-item">
								<div className="extra-cover">
									<img src="https://picsum.photos/75/95" alt="extra book" />
								</div>
								<div className="extra-description">
									<p className="extra-title">Extra title</p>
									<p className="extra-author">by Extra author</p>
									<div className="extra-score">Extra score</div>
								</div>
							</li>
							<li className="extra-item">
								<div className="extra-cover">
									<img src="https://picsum.photos/70/90" alt="extra book" />
								</div>
								<div className="extra-description">
									<p className="extra-title">Extra title</p>
									<p className="extra-author">by Extra author</p>
									<div className="extra-score">Extra score</div>
								</div>
							</li>
						</ul>
					</div>
				</aside>
			</section>
		);
	}
}

Profile.propTypes = {
	book: PropTypes.objectOf(PropTypes.any).isRequired,
};
