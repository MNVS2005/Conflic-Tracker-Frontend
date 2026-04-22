<script setup>

import { ref, watch } from 'vue'
import { useConflictStore } from '../stores/conflictStore'

const props = defineProps({
  conflict: Object // para editar
})

const emit = defineEmits(['saved'])

const store = useConflictStore()

const form = ref({
  name: '',
  startDate: '',
  status: 'ACTIVE',
  description: '',
  countryIds: []
})

// 🧠 si llega conflicto → editar
watch(() => props.conflict, (newVal) => {
  if (newVal) {
    form.value = { ...newVal }
  }
}, { immediate: true })

// 🚀 guardar (crear o editar)
const save = async () => {
 
  if (!form.value.name || !form.value.startDate) {
    alert("Nombre y fecha son obligatorios")
    return
  }

  if (!form.value.countryIds || form.value.countryIds.length === 0) {
    alert("Debes introducir al menos un countryId")
    return
  }

  try {
    if (form.value.id) {
      await store.updateConflict(form.value.id, form.value)
    } else {
      await store.createConflict(form.value)
    }

    emit('saved')

  } catch (error) {
    console.error(error)
    alert("Error al guardar conflicto")
  }
}

</script>

<template>

<div class="form">

  <input v-model="form.name" placeholder="Nombre" />

  <input type="date" v-model="form.startDate" />

  <select v-model="form.status">
    <option value="ACTIVE">ACTIVE</option>
    <option value="FROZEN">FROZEN</option>
    <option value="ENDED">ENDED</option>
  </select>

  <input v-model="form.description" placeholder="Descripción" />

  <input
    type="number"
    v-model.number="form.countryIds[0]"
    placeholder="ID País"
  />

  <button @click="save">
    {{ form.id ? 'Actualizar' : 'Crear' }}
  </button>

</div>

</template>