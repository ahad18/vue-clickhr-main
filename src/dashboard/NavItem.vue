<template>
  <div class="flex items-center space-x-3 cursor-pointer hover:bg-gray-200 rounded p-2 transition">
    <span class="text-lg">{{ icon }}</span>
    <span class="text-sm font-medium">{{ label }}</span>
  </div>
</template>

<script setup>
defineProps(['icon', 'label'])
</script>
