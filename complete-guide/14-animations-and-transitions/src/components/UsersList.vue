<template>
  <ul>
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </ul>
  <div>
    <input type="text" name="name" ref="usernameInput" />
    <button @click="addUser">Add user</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ["Max", "Manu", "Julie", "Angela", "Michael"],
    };
  },
  methods: {
    addUser() {
      const value = this.$refs.usernameInput.value;
      if (value.length > 0) {
        this.users.unshift(this.$refs.usernameInput.value);
      }
    },
    removeUser(user) {
      this.users = this.users.filter((usr) => usr !== user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}
</style>
