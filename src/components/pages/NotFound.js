import React from 'react';

export default class NotFound extends React.Component {
	render() {
		return (
			<div className="not-found">

				<div className="error-message-container">
					<p className="main-error-message">There is nothing here</p>
					<p className="error-description">
					Whatever you were looking for doesn&rsquo;t exist at this address.<br />
					Unless you were looking for this error page, in which case: Congrats!<br />
					You totally found it.
					</p>
				</div>

			</div>
		);
	}
}
