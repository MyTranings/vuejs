<template>
  <add-request :currentCoach="currentCoach"></add-request>
</template>

<script>
import AddRequest from "../components/requests/AddRequest.vue";

export default {
  components: { AddRequest },
  computed: {
    currentCoach() {
      return this.$route.query.coach;
    },
  },
};
</script>

<style></style>
