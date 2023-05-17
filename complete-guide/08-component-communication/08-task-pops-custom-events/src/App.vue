<template>
  <div class="users">
    <user-data></user-data>
    <active-user></active-user>
  </div>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";
export default {
  components: { UserData, ActiveUser },
};
</script>

<style>
.users {
  display: flex;
}
</style>
