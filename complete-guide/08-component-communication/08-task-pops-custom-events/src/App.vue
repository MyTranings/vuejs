<template>
  <div class="users">
    <user-data @update-user-data="updateData"></user-data>
    <active-user v-bind="user"></active-user>
  </div>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";
export default {
  components: { UserData, ActiveUser },
  data() {
    return {
      user: {
        name: "Daniel",
        age: 37,
      },
    };
  },
  methods: {
    updateData(newData) {
      this.user.name = newData.newName;
      this.user.age = newData.newAge;
    },
  },
};
</script>

<style>
.users {
  display: flex;
}
</style>
