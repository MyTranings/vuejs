<template>
  <button @click.prevent="buttonClicked">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    buttonClicked() {
      this.$emit("button-clicked");
    },
  },
};
</script>
