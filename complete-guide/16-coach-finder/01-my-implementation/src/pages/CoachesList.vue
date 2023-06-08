<template>
  <header>
    <h2>Coaches list</h2>
    <router-link to="/register">Register as a coach</router-link>
  </header>
  <coaches-filter></coaches-filter>
  <ul>
    <li v-for="coach in coaches" :key="coach.id">
      <h2>{{ coach.firstName }} {{ coach.lastName }}</h2>
      <p>{{ coach.description }}</p>
      <div class="rate">
        {{ coach.rate }}
      </div>
    </li>
  </ul>
</template>

<script>
import CoachesFilter from "./../components/coaches/CoachesFilter.vue";

export default {
  components: { CoachesFilter },
  computed: {
    coaches() {
      return this.$store.getters["coaches/getCoaches"];
    },
  },
};
</script>

<style></style>
