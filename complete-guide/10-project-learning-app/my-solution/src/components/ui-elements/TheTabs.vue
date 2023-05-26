<template>
  <section>
    <TheButton @click="changeTabs('TheResourcesList')"
      >Stored Resources</TheButton
    >
    <TheButton @click="changeTabs('TheAddForm')">Add Resources</TheButton>
  </section>
</template>

<script>
import TheButton from "../base/TheButton.vue";

export default {
  components: { TheButton },
  methods: {
    changeTabs(cmp) {
      this.$emit("tabs:change", cmp);
    },
  },
};
</script>
