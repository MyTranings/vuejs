<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["first-name", "last-name", "age"],
  setup(props, context) {
    const uName = computed(function () {
      return props.firstName + " " + props.lastName;
    });

    console.log(context);

    context.attrs; // pass through props
    context.slots; // template slots
    // Emit
    context.emit("save-data", 1); // this.$emit('save-data', 1)

    return {
      userName: uName,
    };
  },
  // computed: {
  //   userName() {
  //     return this.firstName + " " + this.lastName;
  //   },
  // },
};
</script>
