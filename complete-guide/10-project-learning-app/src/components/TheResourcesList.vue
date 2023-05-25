<template>
  <ul>
    <TheResourceCard v-for="resource in storedResources" :key="resource.id">
      <h2>{{ resource.title }}</h2>
      <p>{{ resource.description }}</p>
      <a :href="resource.link">View Resource</a>
    </TheResourceCard>
  </ul>
</template>

<script>
import TheResourceCard from "./TheResourceCard.vue";

export default {
  components: { TheResourceCard },
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
