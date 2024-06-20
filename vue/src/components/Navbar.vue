<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const villes = [
  { "ville": "Amiens", "coord": { "latitude": 49.895, "longitude": 2.3023 } },
  { "ville": "Paris", "coord": { "latitude": 48.8566, "longitude": 2.3522 } },
  { "ville": "Marseille", "coord": { "latitude": 43.2965, "longitude": 5.3698 } },
  { "ville": "Lyon", "coord": { "latitude": 45.764, "longitude": 4.8357 } },
  { "ville": "Toulouse", "coord": { "latitude": 43.6047, "longitude": 1.4442 } },
  { "ville": "Nice", "coord": { "latitude": 43.7102, "longitude": 7.262 } },
  { "ville": "Nantes", "coord": { "latitude": 47.2184, "longitude": -1.5536 } },
  { "ville": "Montpellier", "coord": { "latitude": 43.6119, "longitude": 3.8772 } },
  { "ville": "Strasbourg", "coord": { "latitude": 48.5734, "longitude": 7.7521 } },
  { "ville": "Bordeaux", "coord": { "latitude": 44.8378, "longitude": -0.5792 } }
];

const selectedCity = ref('');
const selectedDistance = ref(15);

const handleSubmit = () => {
  const city = villes.find(v => v.ville === selectedCity.value);
  const data = {
    ville: selectedCity.value,
    coord: city ? city.coord : null,
    distance: selectedDistance.value
  };
  store.dispatch('submitSearchData', data);
};
</script>

<template>
  <div class="navbar container-fluid h-100 w-25 d-flex flex-column justify-content-center bg-dark text-white">
    <a class="navbar-brand" href="#">GéoBike</a>
    <h1 class="search">Recherche</h1>
    <div class="search-inputs d-flex flex-column gap-2">
      <div class="input-group mb-3">
        <select v-model="selectedCity" class="form-control city-combobox" id="cityInput">
          <option value="" disabled selected>Ville</option>
          <option v-for="ville in villes" :key="ville.coord.latitude" :value="ville.ville">{{ ville.ville }}</option>
        </select>
      </div>
      <div class="slider d-flex align-items-center">
        <label for="distanceSlider">Distance :</label>
        <input v-model="selectedDistance" type="range" min="0" max="30" value="15" class="mx-2 distance-slider" id="distanceSlider" step="1">
        <span id="distanceValue">{{ selectedDistance }} km</span>
      </div>
      <p class="count">Tu as <span id="bikeCount"> X </span> vélo(s) à proximité.</p>
      <button @click="handleSubmit" class="btn btn-primary btn-lg btn-block">Rechercher</button>
    </div>
  </div>
</template>


<style scoped>
.navbar {
  background-color: #212529;
  color: #f2f2f2;
}

.navbar-brand,
.nav-item,
.input-group-text,
#distanceValue {
  color: #fff;
}

#distanceValue {
  margin-bottom: 1.5rem;
}

.count {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.nav-item {
  margin: 2rem;
  padding: 2rem;
  font-size: 1rem;
  font-weight: 400;
}

.navbar-brand {
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 500;
}

.search {
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 2rem;
  color: hsla(160, 100%, 37%, 1);
}

.nav-items {
  flex-direction: column;
}

.search-inputs {
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

#distanceValue {
  margin-left: 0.5rem;
  font-weight: bold;
}

.input-group {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.city-combobox {
  width: 100%;
  max-width: 300px;
}

.slider {
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 1rem;
}

.distance-slider {
  -webkit-appearance: none;
  width: 200px;
  height: 8px;
  background: #d3d3d3;
  border-radius: 5px;
  outline: none;
  -webkit-transition: .2s;
  transition: .2s;
}

.distance-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  background: #4CAF50;
  border-radius: 50%;
}

.btn-block {
  width: 50%;
  display: flex;
  justify-content: center;
}
</style>
