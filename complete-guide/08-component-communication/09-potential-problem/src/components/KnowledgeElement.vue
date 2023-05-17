<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="selectTopic(this.id)">Learn More</button>
  </li>
</template>

<script>
export default {
  inject: ["selectTopic"],
  props: ["id", "topicName", "description"],
  emits: ["select-topic"],
};
</script>
