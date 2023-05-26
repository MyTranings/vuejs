<template>
  <form>
    <TheField type="text" label="Title" name="title"></TheField>
    <TheField type="textarea" label="Description" name="description"></TheField>
    <TheField type="text" label="Link" name="link"></TheField>
  </form>
</template>

<script>
import TheField from "./TheField.vue";

export default {
  components: { TheField },
};
</script>
