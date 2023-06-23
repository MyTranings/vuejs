<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import { computed, inject } from "vue";

export default {
  props: ["first-name", "last-name"],
  setup(props, context) {
    const uName = computed(function () {
      return props.firstName + " " + props.lastName;
    });

    console.log(context);

    context.attrs; // pass through props
    context.slots; // template slots
    // Emit
    context.emit("save-data", 1); // this.$emit('save-data', 1)

    const age = inject("userAge");

    return {
      userName: uName,
      age,
    };
  },
  // computed: {
  //   userName() {
  //     return this.firstName + " " + this.lastName;
  //   },
  // },
};
</script>
