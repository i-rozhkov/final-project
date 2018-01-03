import React from 'react';
import Breadcrumbs from './Breadcrumbs';

export default class Profile extends React.Component {
	render() {
		return (
			<section className="profile">
				<div className="book-profile">
					<Breadcrumbs />
					<div className="book-cover">
						<img src="https://picsum.photos/300/300" alt="cover" />
					</div>
					<div className="book-description">
						<p className="book-title">Some title</p>
						<p className="book-author">by Some author</p>
						<p className="book-summary">Longlonglonglonglonglonglonglonglonglonglong text</p>
						<div className="book-score">Some score</div>
					</div>
					<button className="read-button">Read</button>
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
