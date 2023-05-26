<template>
  <dialog open>
    <slot></slot>
    <TheButton @click="$emit('close-modal')">Okay</TheButton>
  </dialog>
</template>

<script>
import TheButton from "./TheButton.vue";

export default {
  components: { TheButton },
  methods: {},
};
</script>
