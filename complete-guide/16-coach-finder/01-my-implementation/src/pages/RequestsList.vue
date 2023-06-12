<template>
  <div>
    <h2>Requests List</h2>
    <ul>
      <request-item></request-item>
    </ul>
  </div>
</template>

<script>
import RequestItem from "../components/requests/RequestItem.vue";

export default {
  components: { RequestItem },
};
</script>

<style></style>
