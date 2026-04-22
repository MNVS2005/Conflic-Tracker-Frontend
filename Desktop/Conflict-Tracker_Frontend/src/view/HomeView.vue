<script setup>

import { ref, onMounted } from 'vue'
import { useConflictStore } from '../stores/conflictStore'

import ConflictCard from '../components/ConflictCard.vue'
import ConflictForm from '../components/ConflictForm.vue'

const store = useConflictStore()

const selectedConflict = ref(null)

onMounted(() => {
  store.loadConflicts()
})

// editar
const editConflict = (conflict) => {
  selectedConflict.value = conflict
}

// reset form
const resetForm = () => {
  selectedConflict.value = null
}

</script>

<template>

<h2>Conflicts</h2>

<ConflictForm
  :conflict="selectedConflict"
  @saved="resetForm"
/>

<hr />

<ul>

  <ConflictCard
    v-for="conflict in store.filteredConflicts"
    :key="conflict.id"
    :conflict="conflict"
    @delete="store.deleteConflict"
    @edit="editConflict"
  />

</ul>

</template>