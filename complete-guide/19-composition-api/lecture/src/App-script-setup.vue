<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <input type="text" v-model="userName" />
  </section>
</template>

<script setup>
// Composition API
import { ref } from "vue";

// Non-reactive variable
// const userName = "Maximilian";

// Reactive variable
const userName = ref("Maximilian");

console.log(userName);

setTimeout(function () {
  userName.value = "Max";
}, 2000);
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
