<template>
  <TheHeader>
    <h1>RememberMe</h1>
  </TheHeader>
  <TheTabs></TheTabs>
  <TheResourcesList></TheResourcesList>
</template>

<style></style>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheTabs from "./components/TheTabs.vue";
import TheResourcesList from "./components/TheResourcesList.vue";

export default {
  components: { TheHeader, TheTabs, TheResourcesList },
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
