<template>
	<div id="map" ref="mapElement"></div>
  </template>
  
  <script>
  import L from "leaflet";
  import "leaflet/dist/leaflet.css";
  import "leaflet.markercluster";
  import "leaflet.markercluster/dist/MarkerCluster.Default.css";
  import "leaflet.markercluster/dist/MarkerCluster.css";
  import { toast } from "vue3-toastify";
  import "vue3-toastify/dist/index.css";
  
  export default {
		data() {
		return {
			map: null,
			markers: L.markerClusterGroup(), // Initialiser le groupe de clusters
			localisation : navigator.geolocation.getCurrentPosition(successLocalisation, errorLocalisation);
		};
		},
		
		mounted() {
		this.initMap();
		this.getCoordinatesEvery3s();
			
		}
	},
	methods: {
	  initMap() {
		/* [Lat 49.871144, Log 2.2641492] */
		this.map = L.map("map").setView([this.localisation[0], this.localisation[1]], 12.0);
		L.tileLayer(
		  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
		  {}
		).addTo(this.map);
  
		this.map.addLayer(this.markers); // Ajouter le groupe de clusters à la carte
		this.map.on("moveend", this.fetchCoordinates);
		console.log("Map initialized and moveend event listener added.");
	  },
	  const successLocalisation = (position) => {
			const latitude  = position.coords.latitude;
			const longitude = position.coords.longitude;
			return [longitude, latitude]
		},
		const errorLocalisation = (err) => {
			return [49.871144, 2.2641492]
		},
	  async fetchCoordinates() {
		const bounds = this.map.getBounds();
		const latTop = bounds.getNorthEast().lat;
		const lngTop = bounds.getNorthEast().lng;
		const latBottom = bounds.getSouthWest().lat;
		const lngBottom = bounds.getSouthWest().lng;

		const API_URL = `http://localhost:1337/api/parkings/bounds?latTop=${latTop}&lngTop=${lngTop}&latBottom=${latBottom}&lngBottom=${lngBottom}`;
  
		try {
		  const response = await fetch(API_URL);
		  const data = await response.json();
  
		  console.log("Data received from API:", data);
  
		  // Clear existing markers from the cluster group
		  this.markers.clearLayers();
		
		  data.data = data.data.slice(0, 100);
		  // Add new markers
		  if (data.data && data.data.length > 0) {
			data.data.forEach((parking) => {
			  const { X, Y } = parking.attributes;
			  console.log("Adding marker at coordinates:", { X, Y });
			  const marker = L.marker([Y, X]);
			  this.markers.addLayer(marker); 
			});
		  } else {
			console.log("No parkings found within bounds.");
		  }
		} catch (error) {
		  console.error("Error fetching coordinates:", error);
		}
	  },
	  getCoordinatesEvery3s() {
		setInterval(() => {
		  this.fetchCoordinates();
		}, 3000);
		console.log("Set interval to fetch coordinates every 3 seconds.");
	  },
	},
  };
  </script>
  
  <style scoped>
  #map {
	height: 100%;
	background-color: #212529;
  }
  </style>
  