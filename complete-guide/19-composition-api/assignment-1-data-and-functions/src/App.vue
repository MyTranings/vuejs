<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-show="isGoalVisible">{{ myGoal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toogleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {};
  },
  setup() {
    const myGoal = ref("My Goals is understand Vue");
    const isGoalVisible = ref(true);

    function toogleGoal() {
      isGoalVisible.value = !isGoalVisible.value;
    }

    return {
      myGoal,
      isGoalVisible,
      toogleGoal,
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
