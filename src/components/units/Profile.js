import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const getMainCategory = (category) => {
	const indexOfDivider = category.indexOf('|');
	const mainCategory = indexOfDivider === -1 ? category : category.slice(0, indexOfDivider);
	return mainCategory.toLowerCase();
};

export default class Profile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: this.props.book.title,
			author: this.props.book.author,
			summary: this.props.book.summary,
			score: this.props.book.score,
			image: this.props.book.image,
		};

		this.popup = this.popup.bind(this);
		this.tw = this.tw.bind(this);
		this.li = this.li.bind(this);
		this.gp = this.gp.bind(this);
		this.renderButtons = this.renderButtons.bind(this);
		this.getUrl = this.getUrl.bind(this);
	}

	getUrl(text) {
		return text.split(' ').map(item => item[0].toLowerCase() + item.slice(1)).join('-');
	}

	tw(url, title) {
		return `http://twitter.com/share?
			text=${encodeURIComponent(title)} by ${this.state.author}
			&url=${encodeURIComponent(url)}
			&counturl=${encodeURIComponent(url)}`;
	}

	li(url, title, text) {
		return `http://www.linkedin.com/shareArticle?mini=true
			&url=${encodeURIComponent(url)}
			&title=${encodeURIComponent(title)}
			&summary=${encodeURIComponent(text)}`;
	}

	gp(url) {
		return `https://plus.google.com/share?url=${encodeURIComponent(url)}`;
	}

	popup(event) {
		const url = this[event.target.id.slice(0, 2)](
			window.location.pathname,
			this.state.title,
			this.state.summary,
			this.state.image,
			520,
			350,
		);
		window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
	}

	renderButtons() {
		const socialNetworks = ['tw', 'gp', 'li'];
		return socialNetworks.map((item, index) => (
			<button className="share-button" key={index} id={`${item}-button`} onClick={this.popup} />
		));
	}

	render() {
		return (
			<section className="profile">
				<div className="book-profile">
					<div className="book-cover">
						{<img src={this.state.image} alt="cover" />}
					</div>
					<div className="book-description">
						<p className="book-title">{this.state.title}</p>
						<p className="book-author">by
							<Link to={`/author/${this.getUrl(this.state.author)}`}>
								{this.state.author}
							</Link>
						</p>
						<p className="book-summary">{this.state.summary}</p>
						<div className="book-score"><Rating value={(this.state.score) / 2} /></div>
						<button className="read-button">Read</button>
					</div>
					<div className="share-buttons">
						<span className="share-span">Share this book!</span>
						{this.renderButtons()}
					</div>
				</div>
				<aside className="extra-books">
					<p className="extra-paragraph">Read with this book</p>
					<div className="extra-container">
						<ul className="extra-list">
							<li className="extra-item">
								<div className="extra-cover">
									<img src={this.props.extraBooks[0].image} alt="extra book" />
								</div>
								<div className="extra-description">
									<p className="extra-title">
								<Link to={
									`/category/${getMainCategory(this.props.extraBooks[0].category)
									}/${this.getUrl(this.props.extraBooks[0].title)}`}
								>
									{this.props.extraBooks[0].title}
								</Link>
									</p>
									<p className="extra-author">by
							<Link to={`/author/${this.getUrl(this.props.extraBooks[0].author)}`}>
								{this.props.extraBooks[0].author}
							</Link>
									</p>
									<div className="extra-score">
										<Rating
											size={24}
											value={this.props.extraBooks[0].score / 2}
										/>
									</div>
								</div>
							</li>
							<li className="extra-item">
								<div className="extra-cover">
									<img src={this.props.extraBooks[1].image} alt="extra book" />
								</div>
								<div className="extra-description">
									<p className="extra-title">
								<Link to={
									`/category/${getMainCategory(this.props.extraBooks[1].category)
									}/${this.getUrl(this.props.extraBooks[1].title)}`}
								>
									{this.props.extraBooks[1].title}
								</Link>
									</p>
									<p className="extra-author">by
							<Link to={`/author/${this.getUrl(this.props.extraBooks[1].author)}`}>
								{this.props.extraBooks[1].author}
							</Link>
									</p>
									<div className="extra-score">
										<Rating
											size={24}
											value={this.props.extraBooks[1].score / 2}
										/>
									</div>
								</div>
							</li>
							<li className="extra-item">
								<div className="extra-cover">
									<img src={this.props.extraBooks[2].image} alt="extra book" />
								</div>
								<div className="extra-description">
									<p className="extra-title">
								<Link to={
									`/category/${getMainCategory(this.props.extraBooks[2].category)
									}/${this.getUrl(this.props.extraBooks[2].title)}`}
								>
									{this.props.extraBooks[2].title}
								</Link>
									</p>
									<p className="extra-author">by
							<Link to={`/author/${this.getUrl(this.props.extraBooks[2].author)}`}>
								{this.props.extraBooks[2].author}
							</Link>
									</p>
									<div className="extra-score">
										<Rating
											size={24}
											value={this.props.extraBooks[2].score / 2}
										/>
									</div>
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
	extraBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
