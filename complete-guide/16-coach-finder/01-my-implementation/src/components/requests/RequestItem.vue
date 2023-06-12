<template>
  <li v-for="request in requests" :key="request.id">
    <h3>CoachId: {{ request.coachId }}</h3>
    <div>
      <h4>Message:</h4>
      <p>{{ request.message }}</p>
    </div>
    <div>
      <h4>Request by:</h4>
      <p>{{ request.email }}</p>
    </div>
  </li>
</template>

<script>
export default {
  computed: {
    requests() {
      return this.$store.getters["requests/getRequests"];
    },
  },
};
</script>

<style></style>
