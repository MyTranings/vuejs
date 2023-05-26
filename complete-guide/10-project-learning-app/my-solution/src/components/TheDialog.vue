<template>
  <dialog open>
    <slot></slot>
    <TheButton @click="$emit('modal:close')">Okay</TheButton>
  </dialog>
</template>

<script>
import TheButton from "./TheButton.vue";

export default {
  components: { TheButton },
  methods: {},
};
</script>
