<template>
  <dialog open>
    <slot></slot>
    <TheButton @click="$emit('modal:close')">Okay</TheButton>
  </dialog>
</template>

<script>
import TheButton from "../base/TheButton.vue";

export default {
  components: { TheButton },
  methods: {},
};
</script>
