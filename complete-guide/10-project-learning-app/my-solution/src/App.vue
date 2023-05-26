<template>
  <TheHeader>
    <h1>RememberMe</h1>
  </TheHeader>
  <TheTabs @tabs:change="setSelectedComponent"></TheTabs>
  <keep-alive>
    <component
      :is="selectedComponent"
      :resources="storedResources"
      @item:add="addNewResource"
      @item:delete="deleteResource"
    ></component>
  </keep-alive>
</template>

<style></style>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheTabs from "./components/TheTabs.vue";
import TheResourcesList from "./components/TheResourcesList.vue";
import TheAddForm from "./components/TheAddForm.vue";

export default {
  components: { TheHeader, TheTabs, TheResourcesList, TheAddForm },
  data() {
    return {
      selectedComponent: "TheResourcesList",
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
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
    addNewResource(resource) {
      this.storedResources.push(resource);
    },
    deleteResource(id) {
      this.storedResources = this.storedResources.filter(
        (resource) => resource.id !== id
      );
    },
  },
};
</script>
