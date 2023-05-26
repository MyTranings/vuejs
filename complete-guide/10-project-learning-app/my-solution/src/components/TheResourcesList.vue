<template>
  <ul>
    <TheResourceItem
      v-for="resource in resources"
      :key="resource.id"
      @click:delete="$emit('item:delete', resource.id)"
    >
      <h2>{{ resource.title }}</h2>
      <p>{{ resource.description }}</p>
      <a :href="resource.link">View Resource</a>
    </TheResourceItem>
  </ul>
</template>

<script>
import TheResourceItem from "./TheResourceItem.vue";

export default {
  components: { TheResourceItem },
  props: {
    resources: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
