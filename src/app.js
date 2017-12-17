// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import HeaderJsx from './jsx/Header.jsx';
import './css/styles.css';

class Header extends React.Component {
	render() {
		return HeaderJsx();
	}
}

ReactDOM.render(
	<Header />,
	document.getElementById('main'),
);
