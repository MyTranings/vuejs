<template>
  <ul>
    <li
      :class="{ active: /* Option 1 - activeOption */ modelValue === 'poor' }"
    >
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li
      :class="{
        active: /* Option 1 - activeOption */ modelValue === 'average',
      }"
    >
      <button type="button" @click="activate('average')">Average</button>
    </li>
    <li
      :class="{ active: /* Option 1 - activeOption */ modelValue === 'great' }"
    >
      <button type="button" @click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  // Option 1
  // computed: {
  // activeOption() {
  // return this.modelValue;
  // },
  // },
  methods: {
    activate(option) {
      // Option 1
      // this.activeOption = option;
      this.$emit("update:modelValue", option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: purple;
}
ul {
  list-style-type: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}
li {
  margin: 0 1rem;
  border: 1px solid #fff;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
