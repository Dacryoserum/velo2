<script>
const villes = [
  { "ville": "Paris", "code_postal": "75000" },
  { "ville": "Marseille", "code_postal": "13000" },
  { "ville": "Lyon", "code_postal": "69000" },
  { "ville": "Toulouse", "code_postal": "31000" },
  { "ville": "Nice", "code_postal": "06000" },
  { "ville": "Nantes", "code_postal": "44000" },
  { "ville": "Montpellier", "code_postal": "34000" },
  { "ville": "Strasbourg", "code_postal": "67000" },
  { "ville": "Bordeaux", "code_postal": "33000" },
  { "ville": "Lille", "code_postal": "59000" },
  { "ville": "Rennes", "code_postal": "35000" },
  { "ville": "Reims", "code_postal": "51100" },
  { "ville": "Le Havre", "code_postal": "76600" },
  { "ville": "Saint-Étienne", "code_postal": "42000" },
  { "ville": "Toulon", "code_postal": "83000" },
  { "ville": "Angers", "code_postal": "49000" },
  { "ville": "Grenoble", "code_postal": "38000" },
  { "ville": "Dijon", "code_postal": "21000" },
  { "ville": "Nîmes", "code_postal": "30000" },
  { "ville": "Aix-en-Provence", "code_postal": "13100" },
  { "ville": "Saint-Quentin-en-Yvelines", "code_postal": "78180" },
  { "ville": "Brest", "code_postal": "29200" },
  { "ville": "Limoges", "code_postal": "87000" },
  { "ville": "Tours", "code_postal": "37000" },
  { "ville": "Amiens", "code_postal": "80000" },
  { "ville": "Perpignan", "code_postal": "66000" },
  { "ville": "Metz", "code_postal": "57000" },
  { "ville": "Besançon", "code_postal": "25000" },
  { "ville": "Orléans", "code_postal": "45000" },
  { "ville": "Rouen", "code_postal": "76000" },
  { "ville": "Mulhouse", "code_postal": "68100" },
  { "ville": "Caen", "code_postal": "14000" },
  { "ville": "Boulogne-Billancourt", "code_postal": "92100" },
  { "ville": "Nancy", "code_postal": "54000" },
  { "ville": "Argenteuil", "code_postal": "95100" },
  { "ville": "Saint-Denis", "code_postal": "93200" },
  { "ville": "Roubaix", "code_postal": "59100" },
  { "ville": "Tourcoing", "code_postal": "59200" },
  { "ville": "Montreuil", "code_postal": "93100" },
  { "ville": "Avignon", "code_postal": "84000" },
  { "ville": "Nanterre", "code_postal": "92000" },
  { "ville": "Créteil", "code_postal": "94000" },
  { "ville": "Clermont-Ferrand", "code_postal": "63000" },
  { "ville": "Poitiers", "code_postal": "86000" },
  { "ville": "Fort-de-France", "code_postal": "97200" },
  { "ville": "Villeurbanne", "code_postal": "69100" },
  { "ville": "Aubervilliers", "code_postal": "93300" },
  { "ville": "Asnières-sur-Seine", "code_postal": "92600" },
  { "ville": "Versailles", "code_postal": "78000" }
];
</script>

<template>
  <div class="navbar container-fluid h-100 w-25 d-flex flex-column justify-content-center bg-dark text-white">
    <a class="navbar-brand" href="#">GéoBike</a>
    <h1 class="search">Recherche</h1>
    <div class="search-inputs d-flex flex-column gap-2">
      <div class="input-group mb-3">
        <label class="input-group-text" for="cityInput">Ville :</label>
        <input type="text" class="form-control" id="cityInput" placeholder="Entrez une ville">
      </div>
      <div class="slider d-flex align-items-center">
        <label for="distanceSlider">Distance (km) :</label>
        <input type="range" min="0" max="30" value="15" class="mx-2 distance-slider" id="distanceSlider" step="1">
        <span id="distanceValue">10</span>
      </div>
      <p class="count">Tu as <span id="bikeCount">X</span> vélo(s) à proximité.</p>
    </div>
    <div class="nav-items d-flex flex-column align-items-center">
      <router-link to="/parametre" class="nav-item hover:bg-gray-800">Paramètres</router-link>
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
  margin-bottom: 2rem;
}

.count {
  display: flex;
  justify-content: center;
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
  width: 100%;
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
</style>
