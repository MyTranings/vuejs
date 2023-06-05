<template>
  <button @click="confirmInput">Confirm</button>
  <button @click.prevent="savedChanges">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
  components: {
    UserItem,
  },
  inject: ["users"],
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    confirmInput() {
      // do something
      this.$router.push("/teams");
    },
    savedChanges() {
      this.changesSaved = !this.changesSaved;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log("Users List - beforeRouteEnter");
    console.log(to);
    console.log(from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("Users List - beforeRouteLeave");
    console.log(to);
    console.log(from);
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm(
        "Are you sure? You save unsaved changes!"
      );
      next(userWantsToLeave);
    }
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
