<template>
  <div>
    <h1>Coach Member</h1>
    <h2>{{ coach.firstName }} {{ coach.lastName }}</h2>
    <p>{{ coach.description }}</p>
    <p>{{ coach.rate }}</p>
    <router-link to="/contact">Contact coach</router-link>
  </div>
</template>

<script>
export default {
  props: ["coachId"],
  computed: {
    coach() {
      const coach = this.$store.getters["coaches/getSingleCoach"](this.coachId);
      return coach;
    },
  },
};
</script>

<style></style>
