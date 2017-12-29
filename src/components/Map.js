import React from 'react';

export default class Map extends React.Component {
	componentDidMount() {
		new window.google.maps.Map(document.getElementById('map'), { // eslint-disable-line
			center: { lat: 50.4501, lng: 30.5234 },
			zoom: 13,
			mapTypeId: 'roadmap',
		});
	}

	render() {
		return (
			<div id="app">
				<div id="map" />
			</div>
		);
	}
}
