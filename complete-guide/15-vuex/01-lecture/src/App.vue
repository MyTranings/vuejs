<template>
  <base-container title="Vuex">
    <!-- Variant 1 -->
    <!-- <h3>{{ count }}</h3> -->
    <!-- Variant 2 -->
    <the-counter></the-counter>
    <button @click="addOne">Add 1</button>
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
// Variant 2
import TheCounter from "./components/TheCounter.vue";

export default {
  components: {
    BaseContainer,
    TheCounter, // Variant 2
  },
  computed: {
    // Variant 1
    // count() {
    // return this.$store.state.counter;
    // },
  },
  methods: {
    addOne() {
      this.$store.state.counter += 1;
    },
  },
};
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
</style>
