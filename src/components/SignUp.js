import React from 'react';

export default class SignUp extends React.Component {
	render() {
		return (
			<div className="signup-form">
				<p>Sign In</p>
				<div className="buttons">
					<a href="#"><i className="fa fa-google-plus-square fa-2x" aria-hidden="true" /></a>
					<a href="#"><i className="fa fa-facebook-official fa-2x" aria-hidden="true" /></a>
					<a href="#"><i className="fa fa-twitter-square fa-2x" aria-hidden="true" /></a>
				</div>
			</div>
		);
	}
}
