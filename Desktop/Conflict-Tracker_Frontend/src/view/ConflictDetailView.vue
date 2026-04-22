<script setup>

import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useConflictStore } from '../stores/conflictStore'

const route = useRoute()
const store = useConflictStore()

const conflict = ref(null)

onMounted(async () => {
  conflict.value = await store.getConflictById(route.params.id)
})

</script>

<template>

<div v-if="conflict">

  <h1>{{ conflict.name }}</h1>

  <p>Status: {{ conflict.status }}</p>
  <p>Date: {{ conflict.startDate }}</p>
  <p>{{ conflict.description }}</p>

</div>

</template>