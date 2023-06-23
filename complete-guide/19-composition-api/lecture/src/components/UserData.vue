<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

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

    onBeforeMount(function () {
      console.log("onBeforeMount");
    });

    onMounted(function () {
      console.log("onMounted");
    });

    onBeforeUpdate(function () {
      console.log("onBeforeUpdate");
    });

    onUpdated(function () {
      console.log("onUpdated");
    });

    onBeforeUnmount(function () {
      console.log("onBeforeUnmount");
    });

    onUnmounted(function () {
      console.log("onUnmounted");
    });

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
