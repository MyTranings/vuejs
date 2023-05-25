<template>
  <TheHeader>
    <h1>RememberMe</h1>
  </TheHeader>
  <TheTabs></TheTabs>
  <TheResourcesList></TheResourcesList>
  <TheAddForm></TheAddForm>
  <!-- <keep-alive> -->
  <!-- <component is=""></component> -->
  <!-- </keep-alive> -->
</template>

<style></style>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheTabs from "./components/TheTabs.vue";
import TheResourcesList from "./components/TheResourcesList.vue";
import TheAddForm from "./components/TheAddForm.vue";

export default {
  components: { TheHeader, TheTabs, TheResourcesList, TheAddForm },
  data() {
    return {
      // selectedComponent: "TheResourcesList",
    };
  },
};
</script>
