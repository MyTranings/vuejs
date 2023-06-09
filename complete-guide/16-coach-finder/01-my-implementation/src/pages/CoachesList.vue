<template>
  <header>
    <h2>Coaches list</h2>
    <router-link to="/register">Register as a coach</router-link>
  </header>
  <coaches-filter></coaches-filter>
  <ul>
    <coach-item
      v-for="coach in coaches"
      :key="coach.id"
      :id="coach.id"
      :name="coach.firstName + ' ' + coach.lastName"
      :description="coach.description"
      :rate="coach.rate"
    ></coach-item>
  </ul>
</template>

<script>
import CoachesFilter from "./../components/coaches/CoachesFilter.vue";
import CoachItem from "./../components/coaches/CoachItem.vue";

export default {
  components: { CoachesFilter, CoachItem },
  computed: {
    coaches() {
      return this.$store.getters["coaches/getCoaches"];
    },
  },
};
</script>

<style></style>
