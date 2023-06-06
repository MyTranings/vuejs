<template>
  <button v-if="!isAuth" @click="login">Login</button>
  <button v-else @click="logout">Logout</button>
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
  },
};
</script>
