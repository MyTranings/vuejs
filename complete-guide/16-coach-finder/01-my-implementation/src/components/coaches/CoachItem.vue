<template>
  <li>
    <h2>{{ name }}</h2>
    <!-- <p>{{ description }}</p> -->
    <div class="rate">
      {{ rate }}
    </div>
    <router-link :to="coachDetailsLink">Details</router-link>
  </li>
</template>

<script>
export default {
  props: ["id", "name", "description", "rate"],
  computed: {
    coachDetailsLink() {
      return {
        name: "coach-member",
        params: {
          coachId: this.id,
        },
      };
    },
  },
};
</script>

<style></style>
