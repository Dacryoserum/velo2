<template>
	<div id="map" ref="mapElement"></div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
	
	mounted() {
		this.initMap();
		//this.coordinates = this.fetchCoordinates();
	},
	methods: {
		initMap() {
			this.map = L.map("map").setView([49.871150, 2.263945], 12.0);
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			}).addTo(this.map);
						
		},
		fetchCoordinates(fromInterval) {
			if(this.map.getZoom >= 12) {
				var bounds = this.map.getBounds();
				var lat_top = bounds._northEast.lat.toString();
				var lng_top = bounds._northEast.lng.toString();
				var lat_bottom = bounds._southWest.lat.toString();
				var lng_bottom = bounds._southWest.lng.toString();
			} else {
				const notify_error_zoom = () => {
					toast("Increase the zoom level to obtain a result", {
						"theme": "dark",
						"type": "error",
						"autoClose": 2000,
						"transition": "slide",
						"dangerouslyHTMLString": true
					})
					if (!fromInterval) {
						notify_error_zoom();
					}
					else {
						console.error("Not enough zoom level to fetch coordinates");
						return 0 
					}
				};
			}
			

			const API_URL = `http://localhost:5173/src/api/coordinates?lat_top=${lat_top}&lng_top=${lng_top}&lat_bottom=${lat_bottom}&lng_bottom=${lng_bottom}`;
		
			fetch(API_URL)
				.then(response => response.json())
				.then(data => {
					// Assuming the API response is an array of coordinates in the format [latitude, longitude]
					data.forEach(coord => {
						const marker = L.marker(coord).addTo(this.map);
					});

					return 1
				})
				.catch(error => {
					console.error('Error fetching coordinates:', error);
					return 0
				});
		},
		getCoordinatesEvery3s() {
			setInterval(() => {
				//this.coordinates = this.fetchCoordinates(true);
			}, 3000)
		}	
	},
	created () {
		this.getCoordinatesEvery3s() ; 
	}
};
</script>

<style scoped>
#map {
	height: 100% ; 
	background-color: #212529;
}
</style>