<template>
  <header>
    <h2>Coaches list</h2>
    <router-link to="/register">Register as a coach</router-link>
  </header>
  <coaches-filter></coaches-filter>
  <ul>
    <li>
      <h2>Coach name</h2>
    </li>
  </ul>
</template>

<script>
import CoachesFilter from "./../components/coaches/CoachesFilter.vue";

export default {
  components: { CoachesFilter },
};
</script>

<style></style>
