<template>
    <header class="bg-[#0e2e5c] text-white">
      <div class="container mx-auto flex justify-between items-center py-4 px-6">
        <img src="../assets/white.png" alt="ClickHR Logo" class="h-10" />
        
        <nav class="flex gap-6"> 
      <router-link to="/" class="hover:text-blue-300">Home</router-link> |
      <router-link to="/login" class="hover:text-blue-300">Login</router-link> |
      <router-link to="/signup"class="hover:text-blue-300">Sign Up</router-link>
      <router-link to="/login" class="bg-white text-[#0e2e5c] px-4 py-2 rounded-full font-semibold hover:bg-gray-100">Login</router-link>
    </nav>
      </div>
    </header>
  </template>
  
  <script setup>
  // No script needed
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>