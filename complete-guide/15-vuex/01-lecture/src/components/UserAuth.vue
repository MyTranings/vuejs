<template>
  <button
    v-if="!this.$store.state.isAuthenticated"
    @click="updateAuthentication"
  >
    Login
  </button>
  <button v-else @click="updateAuthentication">Logout</button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["updateAuthentication"]),
  },
};
</script>
