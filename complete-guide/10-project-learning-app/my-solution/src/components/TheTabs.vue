<template>
  <section>
    <TheButton
      label="Stored Resources"
      @click="changeTabs('TheResourcesList')"
    ></TheButton>
    <TheButton
      label="Add Resources"
      component="TheAddForm"
      @click="changeTabs('TheAddForm')"
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
