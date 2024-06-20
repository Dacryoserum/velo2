<script setup lang="ts">
import Carte from "./components/Carte.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <div id="wrapper">
    <Carte />
  </div>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
