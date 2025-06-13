<template>
  <div class="bg-white shadow rounded-lg p-4 h-[80vh]">
    <vue-cal
      :events="events"
      :time="true"
      default-view="month"
      style="height: 100%"
      :on-event-click="handleClick"
      :on-event-create="handleCreate"
      :on-event-dblclick="handleEdit"
      :views="['month', 'week', 'day']"
    />
  </div>
</template>

<script setup>
import VueCal from 'vue-cal'
import { ref } from 'vue'

const events = ref([
  {
    start: new Date(),
    end: new Date(),
    title: 'Team Meeting',
    content: 'Discuss Q3 goals',
    class: 'bg-blue-500 text-white'
  },
  {
    start: new Date(new Date().setHours(14, 0)),
    end: new Date(new Date().setHours(15, 0)),
    title: 'Code Review',
    content: 'Review PR #42',
    class: 'bg-green-500 text-white'
  }
])

const handleClick = (e) => {
  alert(`Event: ${e.title}\nNote: ${e.content}`)
}

const handleCreate = ({ start, end }) => {
  const title = prompt('New Task Title:')
  if (title) {
    events.value.push({
      start,
      end,
      title,
      content: '',
      class: 'bg-yellow-500 text-white'
    })
  }
}

const handleEdit = (e) => {
  const content = prompt('Edit note:', e.content)
  if (content) e.content = content
}
</script>

<style scoped>
.vuecal__event { cursor: pointer; }
</style>
