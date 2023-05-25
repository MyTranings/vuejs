<template>
  <TheResourcesList></TheResourcesList>
</template>

<style></style>

<script>
import TheResourcesList from "./components/TheResourcesList.vue";

export default {
  components: { TheResourcesList },
  data() {
    return {
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official documentation",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn google",
          link: "https://google.com",
        },
      ],
    };
  },
};
</script>
