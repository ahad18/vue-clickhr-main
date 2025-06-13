<template>
  <div class="bg-white shadow rounded-lg p-6 flex flex-col h-full">
    <h3 class="text-lg font-semibold text-gray-700 mb-4">Notes</h3>
    <textarea
      v-model="note"
      placeholder="Write your note here..."
      class="flex-1 border border-gray-300 rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <button
      @click="saveNote"
      class="mt-4 bg-[#0e2e5c] text-white py-2 px-4 rounded hover:bg-blue-700 transition"
    >
      Save
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const note = ref('')

const saveNote = () => {
  alert(`Note saved:\n\n${note.value}`)
  note.value = ''
}
</script>
