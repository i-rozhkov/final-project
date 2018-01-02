import React from 'react';

export default class Map extends React.Component {
	componentDidMount() {
		const map = new window.google.maps.Map(document.getElementById('map'), { // eslint-disable-line
			center: { lat: 50.4501, lng: 30.5234 },
			zoom: 13,
			mapTypeId: 'roadmap',
		});

		const marker = new google.maps.Marker({ // eslint-disable-line
			position: { lat: 50.4501, lng: 30.5234 },
			map,
			title: 'We are here!',
		});
	}

	render() {
		return (
			<div id="app">
				<p>Find us on map!</p>
				<div id="map" />
			</div>
		);
	}
}
