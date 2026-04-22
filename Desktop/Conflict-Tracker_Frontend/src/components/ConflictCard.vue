<script setup>

const props = defineProps({
  conflict: Object
})

const emit = defineEmits(['delete'])

</script>

<template>

<li>

  <div>
    <strong>{{ conflict.name }}</strong>
    <p>{{ conflict.status }}</p>
    <p>{{ conflict.startDate }}</p>
  </div>

  <button @click="emit('delete', conflict.id)">
    Eliminar
  </button>

</li>

</template>