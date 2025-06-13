<template>
  <div class="bg-white rounded-lg shadow p-6">
    <h3 class="text-md font-semibold text-gray-700">{{ title }}</h3>
    <p class="text-2xl font-bold text-blue-600 mt-2">{{ value }}</p>
  </div>
</template>

<script setup>
defineProps(['title', 'value'])
</script>
