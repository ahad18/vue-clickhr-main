<script setup lang="ts">
</script>

<template>
  <div>
    <!-- Header/Logos -->
    

    <!-- Navigation Links -->
    

    <!-- Routed View -->
    <router-view />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
nav {
  margin: 1rem 0;
}
nav a {
  margin: 0 0.5rem;
  text-decoration: none;
  color: #42b983;
}
nav a.router-link-active {
  font-weight: bold;
}
</style>
