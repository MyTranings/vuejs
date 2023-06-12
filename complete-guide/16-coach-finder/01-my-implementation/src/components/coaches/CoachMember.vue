<template>
  <div>
    <p v-if="isLoading">Loading...</p>
    <div v-else>
      <h1>Coach Member</h1>
      <h2>{{ coach.firstName }} {{ coach.lastName }}</h2>
      <p>{{ coach.description }}</p>
      <p>{{ coach.rate }}</p>
      <router-link
        :to="{
          name: 'contact',
          query: {
            coach: coachId,
          },
        }"
        >Contact coach</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["coachId"],
  computed: {
    isLoading() {
      return this.$store.getters["coaches/isLoading"];
    },
    coach() {
      if (!this.isLoading) {
        return this.$store.getters["coaches/getSingleCoach"](this.coachId);
      } else {
        return {};
      }
    },
  },
};
</script>

<style></style>
