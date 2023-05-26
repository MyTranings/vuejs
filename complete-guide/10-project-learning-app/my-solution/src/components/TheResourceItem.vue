<template>
  <li>
    <slot></slot>
    <TheButton @click="$emit('click:delete')">Delete</TheButton>
  </li>
</template>

<script>
import TheButton from "./TheButton.vue";

export default {
  components: { TheButton },
  methods: {},
};
</script>
