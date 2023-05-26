<template>
  <section>
    <TheButton
      label="Stored Resources"
      @button-clicked="changeTabs('TheResourcesList')"
    ></TheButton>
    <TheButton
      label="Add Resources"
      component="TheAddForm"
      @button-clicked="changeTabs('TheAddForm')"
    ></TheButton>
  </section>
</template>

<script>
import TheButton from "./TheButton.vue";

export default {
  components: { TheButton },
  methods: {
    changeTabs(cmp) {
      this.$emit("change-tabs", cmp);
    },
  },
};
</script>
