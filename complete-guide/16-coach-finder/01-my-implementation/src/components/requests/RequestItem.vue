<template>
  <li v-for="request in requests" :key="request.id">
    <h3>Coach: {{ coachName(request.coachId) }}</h3>
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
    isLaoding() {
      return this.$store.getters["coaches/isLoading"];
    },
  },
  methods: {
    coachName(id) {
      if (!this.isLaoding) {
        const coach = this.$store.getters["coaches/getSingleCoach"](id);
        return `${coach.firstName} ${coach.lastName}`;
      }
    },
  },
};
</script>

<style></style>
