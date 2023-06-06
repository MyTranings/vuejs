<template>
  <button v-if="!isAuth" @click="login">Login</button>
  <button v-else @click="logout">Logout</button>
  <p>{{ isTestAuth }}</p>
</template>

<script>
// import { mapActions } from "vuex";

export default {
  methods: {
    // ...mapActions(["login", "logout"]),
    login() {
      this.$store.dispatch("login");
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
  computed: {
    isAuth() {
      return this.$store.getters.getAuthentication;
    },
    isTestAuth() {
      return this.$store.getters.testAuth;
    },
  },
};
</script>
