<template>
  <div>
    <the-navigation></the-navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavigation from "./components/nav/TheNavigation";

export default {
  components: {
    TheNavigation,
  },
};
</script>

<style></style>
