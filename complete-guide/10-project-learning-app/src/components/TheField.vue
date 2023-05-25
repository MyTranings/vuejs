<template>
  <div class="field-wrapper">
    <label :for="name">{{ label }}</label>
    <textarea v-if="type === 'textarea'" :name="name" :id="name"></textarea>
    <input v-else :name="name" :id="name" type="text" />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
