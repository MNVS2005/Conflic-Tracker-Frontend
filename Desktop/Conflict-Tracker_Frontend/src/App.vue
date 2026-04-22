<script setup>
</script>

<template>

  <div id="app">

    <header class="header">
      <h1>Global Conflict Monitor</h1>
    </header>

    <router-view />

  </div>

</template>

<style>

#app {
  font-family: Arial, Helvetica, sans-serif;
  background: #f5f7fb;
  min-height: 100vh;
}

.header {
  background: #4f46e5;
  color: white;
  padding: 16px;
  text-align: center;
}

</style>